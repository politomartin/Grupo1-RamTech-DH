const bcryptjs = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controller = {
    
    login: (req,res) => {
        res.render("./users/login");
    },
    loginProcess: (req, res) => {
        //Buscamos usuario por mail
        userToLogin = users.find((user) => user.email == req.body.email);
        //Si no se encuentra, lanzamos error
        if (!userToLogin)
        {
            return res.render("./users/login", {
                errors: {
                  email: {
                    msg: "No se encontró el mail",
                  },
                },
                oldData: req.body,
              });
        }
        //Comparamos input contra hash
        let passwordCheck = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
        );
        if (passwordCheck)
        {
            //Por seguridad, se borra esta propiedad
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            return res.redirect("./profile");
        }
        return res.render("./users/login", {
            errors: {
              password: {
                msg: "La contraseña es incorrecta",
              },
            },
            oldData: req.body,
          });
    },
    register: (req,res) => {
        res.render("./users/register");
    },
    registerProcces: (req, res) => {
      let errors = validationResult(req);
      if(errors.isEmpty()){
        const newUser = {
            id: users[users.length - 1].id + 1,
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            favouriteProducts: [],
            image: req.file ? req.file.filename : "imagenPerfil.png",
            rol: "user"
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/');
      }else{
        res.render('./users/register', { errors: errors.mapped(), old: req.body})
      }
    },
    profile: (req,res) => {
      console.log(req.session.userLogged);
        res.render("./users/profile",
        {
            user: req.session.userLogged
        });
    }
}

module.exports = controller;