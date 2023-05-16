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
      if (req.body.remember) {
        res.cookie("userEmail", user.email, { maxAge: (1000 * 60) * 2 })
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
      let imageDefault = "./images-users/imagenPerfil.png"
      let user = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file ? req.file.filename : imageDefault,
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

  userEdit: async (req, res) => {
    try {
      const usertoEdit = await db.User.findOne(
        { where: { id: req.session.user.id } }
      )
      res.render("./users/users", { usertoEdit })
    }
    catch (error) {
      res.send(error)
    }
  },

  userEdition: async (req, res) => {
    try {
      const userEdited = {
        first_name: req.body.name,
        last_name: req.body.lastName,
        password: bcryptjs.hashSync(req.body.password, 10),
        email: req.body.email,
        image: req.file.filename
      }
      await db.User.update(userEdited, { where: { id: req.params.id } });
      res.redirect('/users/profile');
    } catch (error) {
      return res.send(error);
    }
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
}

module.exports = controller;