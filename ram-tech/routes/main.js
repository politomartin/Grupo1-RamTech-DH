const express = require('express');

const mainController = require("../controllers/mainController")

const router = express.Router();

router.get('/', mainController.index);
router.get('/product-cart', mainController.productCart);
router.get('/product-detail', mainController.productDetail);
router.get('/product-edit', mainController.productEdit);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
module.exports = router;