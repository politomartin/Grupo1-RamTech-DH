const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    
    // INDEX
    
    index: (req,res) => {
        res.render("index");
    },

    // CARRITO

    productCart: (req,res) => {
        res.render("./products/productCart");
    },

    // DETALLE DEL PRODUCTO

    productDetail: (req,res) => {
        res.render("./products/productDetail");
    },
    
    // CREACIÓN Y EDICIÓN

    productCreate: (req,res) => {
        res.render("./products/productCreate");
    },

    // store: (req, res) => {
	// 	const newProduct = {
    //         id: products[products.length - 1].id + 1,
	// 		image: 'bg.png',
	// 		...req.body
	// 	};
        
    //     products.push(newProduct);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
	// 	res.redirect('/');
    // },
    
    productEdit: (req,res) => {
        
        res.render("./products/productEdit");
    },
    
    // USUARIOS
    
    login: (req,res) => {
        res.render("./users/login");
    },

    register: (req,res) => {
        res.render("./users/register");
    }
}

module.exports = controller;