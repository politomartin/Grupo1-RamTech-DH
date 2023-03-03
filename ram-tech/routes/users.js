const express = require('express');
const router = express.Router();

const usersController = require("../controllers/usersController")


router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess)
router.get('/register', usersController.register);
router.get('/profile', usersController.profile);


module.exports = router;