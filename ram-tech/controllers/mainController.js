const db = require('../database/models');


const controller = {

    index: async (req, res) => {
        const products = await db.Product.findAll();
        const categories = await db.Category.findAll();

        return res.render('index', { products,categories });
         
    },


}

module.exports = controller;