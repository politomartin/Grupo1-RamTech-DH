const db = require('../database/models');

const controller = {
    index: (req, res) => {
        db.Product.findAll({
            include: ['brands', 'categories', 'product_images'],
            order: [["id", "ASC"]]
        })
            .then((products) => {
                return res.render('index', { products })
            });
    },
};

module.exports = controller;
