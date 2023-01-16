const path = require("path");

const controller = {
    index: (req,res) => {
        res.render("index");
    },
    productCart: (req,res) => {
        res.render("./products/productCart");
    },
    productDetail: (req,res) => {
        res.render("./products/productDetail");
    },
    productEdit: (req,res) => {
        res.render("./products/productEdit");
    },
    productCreate: (req,res) => {
        res.render("./products/productCreate");
    },
    login: (req,res) => {
        res.render("./users/login");
    },
    register: (req,res) => {
        res.render("./users/register");
    }
}

module.exports = controller;