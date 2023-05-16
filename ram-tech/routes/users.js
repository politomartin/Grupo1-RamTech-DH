const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");
const usersController = require("../controllers/usersController")

// Configuracion Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/images-users'));
    },
    filename: (req, file, cb) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage });


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
    check("confirmPassword").custom((value, { req }) => {
        return value === req.body.password;
    }).withMessage('Las contraseñas deben coincidir'),
    check("image")
        .custom((value, { req }) => {
            if (!req.file) {
                return true
            }
            const fileExt = path.extname(req.file.originalname);
            const ext = [".jpg", ".jpeg", ".png", ".gif"];
            if (ext.includes(fileExt)) {
                return true;
            }
        })
        .withMessage("Formato de archivo no válido")

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
router.post('/login', userLoggedMiddleware, validationsUserLogin, usersController.loginProcess)

router.get('/register', guestMiddleware, usersController.register);
router.post('/', upload.single('image'), validationsUserRegister, usersController.registerProcces);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);

router.get('/user-edit', usersController.userEdit);
router.put('/user-edit/:id', upload.single('image'), validationsUserRegister, usersController.userEdition);

module.exports = router;