const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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



router.get('/', productsController.index); 

router.get('/product-cart',authMiddleware, productsController.productCart);

router.get('/product-detail/:id', productsController.productDetail);

router.get('/product-create',authMiddleware, productsController.productCreate);
router.post('/', upload.single('image'),authMiddleware,productsController.store);

router.get('/product-edit/:id',authMiddleware, productsController.productEdit);
router.put('/:id', upload.single('image'),authMiddleware, productsController.editedProduct);

router.delete('/delete/:id',authMiddleware, productsController.deleteProduct);

router.get ("/search", productsController.search)
module.exports = router;