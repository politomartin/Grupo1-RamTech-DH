const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');
const { captureRejectionSymbol } = require("events");

const db = require("../database/models");


const controller = {

  login: (req, res) => {
    res.render("./users/login");
  },
  loginProcess: async (req, res) => {
    try {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render("./users/login", {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }
      const user = await db.User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (!user) {
        return res.render('./users/login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
      }
      if (!bcryptjs.compareSync(req.body.password, user.password)) {
        return res.render('./users/login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña invalidos' } } });
      }
      req.session.user = user;
      res.redirect('/users/profile');

    } catch (error) {
      res.send(error);
    }
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  registerProcces: async (req, res) => {
    try {

      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
        return res.render("./users/register", {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }

      let userInDB = await db.User.findOne({
        where: {
          email: req.body.email
        }
      });

      if (userInDB) {
        return res.render('./users/register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body
        });
      }
      let user = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file ? req.file.filename : "imagenPerfil.png",
      }

      await db.User.create(user);
      res.redirect("/")

    } catch (error) {
      res.send(error)
    }

  },
  profile: (req, res) => {
    res.render("./users/profile",
      {
        user: req.session.user
      });
  },
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
}

module.exports = controller;