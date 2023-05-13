const db = require('../database/models');

const controller = {
    index: async (req, res) => {
        try {
            const [products, categories] = await Promise.all([
                db.Product.findAll({
                    include: ['categories', 'product_images'],
                    order: [["price", "ASC"]]
                }),
                db.Category.findAll({
                    include: ['products'],
                })
            ]);
            return res.render('index', { products, categories });
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = controller;
