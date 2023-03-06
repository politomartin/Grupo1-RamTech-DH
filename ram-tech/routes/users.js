const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const usersController = require("../controllers/usersController")

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

router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess)

router.get('/register', usersController.register);
router.post('/', upload.single('image'), usersController.registerProcces);

router.get('/profile', usersController.profile);


module.exports = router;