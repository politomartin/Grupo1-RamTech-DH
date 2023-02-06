const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.index); 


router.get('/product-cart', productsController.productCart);


router.get('/product-detail/:id', productsController.productDetail);


router.get('/product-create', productsController.productCreate);
router.post('/', productsController.store);


router.get('/product-edit/:id', productsController.productEdit);
router.put('/:id', productsController.editedProduct);

//router.get('/product-edit/:id', productsController.productEdit);
//router.delete('/:id', productsController.deleteProduct);


module.exports = router;