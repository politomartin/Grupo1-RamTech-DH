// Habría que incluir la relación entre el rol y el usuario, para saber si es admin o user

const bcryptjs = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
const { captureRejectionSymbol } = require("events");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require("../database/models");


const controller = {

  login: (req, res) => {
    res.render("./users/login");
  },
  loginProcess: async (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        let userToLogin = await db.User.findOne({
          where: {
            email: req.body.email
          }
        })
        if (!userToLogin) {
          return res.send('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidas' } } })
        };
        let passwordCheck = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (passwordCheck) {
          //Por seguridad, se borra el password
          let userToCookie = {
            ...userToLogin.dataValues,
            password: ""
          }
          req.session.userLogged = userToCookie;
          if (req.body.remember) {
            res.cookie('userEmail', req.body.email), { maxAge: (1000 * 60) }
          }
          return res.redirect("./profile");
        }
      } catch (error) {
        res.send(error)
      }
    } else {
      res.render('./users/login', { errors: errors.mapped(), old: req.body })
    }
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  registerProcces: async (req, res) => {
    if(req.body.email)
    try {
      let user = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file ? req.file.filename : "imagenPerfil.png",
      };
      await db.User.create(user);
      res.redirect("/")

    } catch (error) {
      res.send(error)
    }

  },
  profile: (req, res) => {
    res.render("./users/profile",
      {
        user: req.session.userLogged
      });
  },
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
}

module.exports = controller;