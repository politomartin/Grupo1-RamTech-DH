const db = require('../database/models');

const controller = {
    //LISTA DE PRODUCTOS
    index: (req, res) => {
        db.Product.findAll()
            .then((products) => {
                return res.render('./products/products', { products })
            });
    },
    // CARRITO
    productCart: (req, res) => {
        res.render("./products/productCart");
    },

    // DETALLE DEL PRODUCTO
    productDetail: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: ['brands', 'categories', 'product_images']
            })
            res.json(product);
        } catch (error) {
            console.log(error)
        }

    },

    // CREACIÓN Y EDICIÓN
    productCreate: async (req, res) => {
        try {
            const requestedCategories = await db.Category.findAll();
            const requestedBrands = await db.Brand.findAll();

            Promise.all([requestedCategories, requestedBrands])
                .then(([category, brand]) => {
                    res.render("./products/productCreate", { category, brand });
                })
        } catch (error) {
            res.send(error)
        }


    },

    store: async (req, res) => {
        try {
            await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                description: req.body.description,
                brands_id: req.body.brand,
                categories_id: req.body.category
            })
            res.redirect('/products');
        }
        catch (error) {
            console.log(error)
        }
    },

    productEdit: (req, res) => {
       

        const requestProduct = db.Product.findByPk(req.params.id);
        const requestCategory = db.Category.findAll();
        const requestBrand = db.Brand.findAll();
        const requestProductImages = db.ProductImages.findAll();

        Promise.all([requestProduct, requestCategory, requestBrand, requestProductImages])
            .then(([product, category, brand, product_images]) => {
                res.render("./products/productEdit", { product, category, brand, product_images });
            })
    },

    editedProduct: (req, res) => {
        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            brands_id: req.body.brand,
            categories_id: req.body.category
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/products/' + req.params.id);
    },

    // ELIMINACIÓN
    deleteProduct: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products');
     
    }

}

module.exports = controller;