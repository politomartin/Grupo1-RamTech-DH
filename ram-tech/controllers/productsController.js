const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/*const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/

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
            res.render("./products/productDetail", { product });
        } catch (error) {
            console.log(error)
        }

        /*const { id } = req.params;
        const product = products.find((product) => product.id == id);*/

    },

    // CREACIÓN Y EDICIÓN
    productCreate: (req, res) => {
        res.render("./products/productCreate")
    },
    store: (req, res) => {
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            brands_id: req.body.brand,
            categories_id: req.body.category
        })

        /*const newProduct = {
            id: products[products.length - 1].id + 1,
            image: req.file.filename,
            ...req.body
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));*/
        res.redirect('/products');
    },

    productEdit: (req, res) => {
        /*const productToEdit = products.find((product) => product.id == req.params.id)*/

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

        res.redirect('/products/' + req.params.id)

            /* console.log(req.file);
            let productToEdit = products.find((product) => product.id == req.params.id)
            productToEdit = {
                ...productToEdit,
                ...req.body,
                image: req.file ? req.file.filename : productToEdit.image
            }
            const indexToEdit = products.findIndex((product) => product.id == req.params.id)
            products[indexToEdit] = productToEdit
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); */
            ;
    },

    // ELIMINACIÓN
    deleteProduct: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products');
        /*const productIndexFound = products.findIndex(function(product){
            return product.id == req.params.id;
        })
        console.log(productIndexFound);
        if (productIndexFound > 0) {
            products.splice(productIndexFound, 1)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); 
        }*/

    }

}

module.exports = controller;