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

let upload = multer({ storage });

const validationsProducts = [
    check('name')
        .notEmpty().withMessage('Debe poner un nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),
    check('description')
        .isLength({ min: 20 }).withMessage('La descripción debe contener al menos 20 caracteres'),
    check('price')
        .isNumeric().withMessage('El precio debe ser un número').bail(),
    check('image').custom(function (value, { req }) {
        let ext
        if (req.file != undefined) {
            return true
        } else {
            ext = "" + path.extname(req.files[0].filename).toLowerCase();
        }
        if (
            ext == ".jpg" ||
            ext == ".jpeg" ||
            ext == ".png" ||
            ext == ".gif") {
            return true;
        }
        return false;
    }).withMessage('Solo debe seleccionar archivos  con extensión JPG, JPEG, PNG o GIF')
]

router.get('/', productsController.index);

router.get('/product-cart', authMiddleware, productsController.productCart);

router.get('/product-detail/:id', productsController.productDetail);

router.get('/product-create', authMiddleware, productsController.productCreate);
router.post('/', upload.single('image'), validationsProducts, authMiddleware, productsController.store);

router.get('/product-edit/:id', authMiddleware, productsController.productEdit);
router.put('/:id', upload.single('image'), validationsProducts, authMiddleware, productsController.editedProduct);

router.delete('/delete/:id', authMiddleware, productsController.deleteProduct);

router.get("/search", productsController.search)
module.exports = router;