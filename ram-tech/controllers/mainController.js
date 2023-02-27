const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    
    // INDEX
    
    index: (req,res) => {
        res.render("index", { products: products});
    },

   
}

module.exports = controller;