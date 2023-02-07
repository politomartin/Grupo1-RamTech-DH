const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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

router.get('/product-cart', productsController.productCart);

router.get('/product-detail/:id', productsController.productDetail);

router.get('/product-create', productsController.productCreate);
router.post('/', upload.single('image'),productsController.store);

router.get('/product-edit/:id', productsController.productEdit);
router.put('/:id', upload.single('image'), productsController.editedProduct);

router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;