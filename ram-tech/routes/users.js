const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const usersController = require("../controllers/usersController")

// Configuracion Multer
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/images-users'));
    },
    filename: (req, file, callback) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        callback(null, newFileName);
    }
})

let upload = multer({ storage });

//Validaciones
const validationsUserRegister = [
    check('name')
        .notEmpty().withMessage('Debe poner un nombre').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe contener al menos 3 caracteres'),
    check('lastName')
        .notEmpty().withMessage('Debe ingresar su Apellido').bail()
        .isLength({ min: 3 }).withMessage('El apellido debe contener al menos 3 caracteres'),
    check('email')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
]
const validationsUserLogin = [
    check('email')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
];

//Rutas
router.get('/login', usersController.login);
router.post('/login',validationsUserLogin, usersController.loginProcess)

router.get('/register', usersController.register);
router.post('/', upload.single('image'), validationsUserRegister, usersController.registerProcces);

router.get('/profile', usersController.profile);


module.exports = router;