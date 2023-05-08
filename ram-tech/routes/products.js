const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

const productsController = require('../controllers/productsController');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/images-products'));
    },
    filename: (req, file, cb) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage });

const validationProduct = [
    check("name")
        .notEmpty().withMessage('Debe poner un nombre').trim().bail()
        .isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),
    check("price")
        .isNumeric().withMessage('El precio tiene que ser un número'),
    check("description")
        .isLength({ min: 20 }).withMessage('La descripción debe contener al menos 20 caracteres').trim(),
    check("image")
        .custom((value, { req }) => {
            if (!req.file) {
                return true
            }
            const fileExt = path.extname(req.file.originalname);
            const ext = [".jpg", ".jpeg", ".png", ".gif"];
            if (ext.includes(fileExt)) {
                return true
            }
        })
        .withMessage("Formato de archivo no válido")
]

router.get('/', productsController.index);

router.get('/product-cart', authMiddleware, productsController.productCart);

router.get('/product-detail/:id', productsController.productDetail);

router.get('/product-create', authMiddleware, productsController.productCreate);
router.post('/', upload.any(), validationProduct, authMiddleware, productsController.store);

router.get('/product-edit/:id', authMiddleware, productsController.productEdit);
router.put('/:id', upload.any(), validationProduct, authMiddleware, productsController.editedProduct);

router.get("/edit-images/:id", productsController.imagesEdit);
router.post("/add-images/:id", upload.any(), productsController.imagesAdd);
router.post("/delete-images/:id", productsController.imagesDelete);

router.delete('/delete/:id', authMiddleware, productsController.deleteProduct);
router.get("/search", productsController.search);
router.get("/search-cat/:id", productsController.searchCategories);
module.exports = router;