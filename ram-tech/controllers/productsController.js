const db = require('../database/models');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');

const controller = {
    //LISTA DE PRODUCTOS
    index: (req, res) => {
        db.Product.findAll({
            include: ['brands', 'categories', 'product_images'],
            order: [["id", "ASC"]]
        })
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

    },

    // CREACIÓN Y EDICIÓN
    productCreate: async (req, res) => {
        try {
            const categories = await db.Category.findAll();
            const brands = await db.Brand.findAll();

            res.render("./products/productCreate", { categories, brands });
        } catch (error) {
            res.send(error);
        }
    },

    store: async (req, res) => {
        const categories = await db.Category.findAll();
        const brands = await db.Brand.findAll();
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("./products/productCreate", {
                    errors: resultValidation.mapped(), oldData: req.body, categories, brands
                });
            }
            let productCreate = await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                description: req.body.description,
                brands_id: req.body.brand,
                categories_id: req.body.category,
            })
            let imagesTocreate = req.files.map(file => {
                return {
                    name: file.filename,
                    product_id: productCreate.id,
                }
            })
            await db.ProductImages.bulkCreate(imagesTocreate);
            res.redirect('/products');
        }
        catch (error) {
            console.log(error)
        }
    },

    productEdit: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            const category = await db.Category.findAll();
            const brand = await db.Brand.findAll();
            const product_images = await db.ProductImages.findAll();

            res.render("./products/productEdit", { product, category, brand, product_images });
        } catch (error) {
            console.log(error);
        }
    },


    editedProduct: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            const category = await db.Category.findAll();
            const brand = await db.Brand.findAll();
            const product_images = await db.ProductImages.findAll();
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render("./products/productEdit", {
                    errors: resultValidation.mapped(), product, category, brand, product_images

                });

            }

            await db.Product.update({
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
            res.redirect('/products');
        } catch (error) {
            res.send(error);
        }
    },

    imagesEdit: async (req, res) => {
        let products = await db.Product.findByPk(req.params.id, {
            include: ["product_images"]
        });
        res.render("./products/imagesEdit", { products })
    },
    imagesAdd: async (req, res) => {
        let productId = req.params.id;
        let imagesTocreate = req.files.map(file => {
            return {
                name: file.filename,
                product_id: productId,
            }
        })
        await db.ProductImages.bulkCreate(imagesTocreate);
        res.redirect(`/products/edit-images/${productId}`);
    },
    imagesDelete: async (req, res) => {
        try {
            let image = await db.ProductImages.findOne({
                where: {
                    name: req.body.imageToDelete
                }
            })
            let productId = image.product_id;
            await db.ProductImages.destroy({
                where: {
                    name: req.body.imageToDelete
                }
            })
            res.redirect(`/products/edit-images/${productId}`)
        }
        catch (error) {
            res.send(error);
        }
    },

    // ELIMINACIÓN
    deleteProduct: async function (req, res) {
        await db.ProductImages.destroy({
            where: {
                product_id: req.params.id
            }
        })
        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products');
    },

    search: async (req, res) => {
        try {
            const { q } = req.query
            const products = await db.Product.findAll({
                include: ['brands', 'categories', 'product_images'],
                where: {
                    name: {
                        [Op.like]: '%' + q + '%'
                    }
                }

            })
            res.render("./products/productSearch", { products })

        }
        catch (error) {
            res.send(error)
        }
    },
    searchCategories: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: ['brands', 'categories', 'product_images'],
                where: {
                    categories_id: req.params.id
                }
            })
            res.render("./products/productSearch", { products })
            // res.json(products)
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = controller;