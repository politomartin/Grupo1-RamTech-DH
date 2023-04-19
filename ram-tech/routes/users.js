const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

const usersController = require("../controllers/usersController")

// Configuracion Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/images-users'));
    },
    filename: (req, file, callback) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        callback(null, newFileName);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/gif'
    ) {
        cb(null, true);
    } else {
        cb(new Error('Solo se permiten archivos de imagen con extensiones JPG, JPEG, PNG o GIF'));
    }
};

const upload = multer({ storage, fileFilter });


//Validaciones
const validationsUserRegister = [
    check('name')
        .notEmpty().withMessage('Debe poner un nombre').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe contener al menos 2 caracteres'),
    check('lastName')
        .notEmpty().withMessage('Debe ingresar su Apellido').bail()
        .isLength({ min: 2 }).withMessage('El apellido debe contener al menos 2 caracteres'),
    check('email')
        .notEmpty().withMessage('Debe ingresar un email').bail()
        .isEmail().withMessage('Debe ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
        .matches(passwordRegex)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial y tener al menos 8 caracteres'),
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
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validationsUserLogin, usersController.loginProcess)

router.get('/register', guestMiddleware, usersController.register);
router.post('/', upload.single('image'), validationsUserRegister, usersController.registerProcces);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);


module.exports = router;