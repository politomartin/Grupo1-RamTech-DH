const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

const productsController = require('../controllers/productsController');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/images-products'));
    },
    filename: (req, file, callback) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        callback(null, newFileName);
    }
})

const fileFilter = (req, file, callback) => {
    if (
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/gif'
    ) {
        callback(null, true);
    } else {
        callback(new Error('Solo se permiten archivos de imagen con extensiones JPG, JPEG, PNG o GIF'));
    }
};

const upload = multer({ storage, fileFilter });

const validationProduct = [
    check("name")
        .trim()
        .notEmpty().withMessage('Debe poner un nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),
    check("price")
        .trim()
        .isNumeric().withMessage('El precio tiene que ser un número'),
    check("description")
        .trim()
        .notEmpty().withMessage('No puede estar vacío').bail()
        .isLength({ min: 20 }).withMessage('La descripción debe contener al menos 20 caracteres')
]

router.get('/', productsController.index);

router.get('/product-cart', authMiddleware, productsController.productCart);

router.get('/product-detail/:id', productsController.productDetail);

router.get('/product-create', authMiddleware, productsController.productCreate);
router.post('/', validationProduct, upload.single('image'), authMiddleware, productsController.store);

router.get('/product-edit/:id', authMiddleware, productsController.productEdit);
router.put('/:id', validationProduct, upload.single('image'), authMiddleware, productsController.editedProduct);

router.delete('/delete/:id', authMiddleware, productsController.deleteProduct);

router.get("/search", productsController.search)
module.exports = router;