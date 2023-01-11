const express = require("express")
const path = require("path")

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/users/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/users/login.html'));
})

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/products/productDetail.html'));
})

app.get('/product-cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/products/productCart.html'));
})
app.listen(3033, () => {
    console.log('Servidor iniciado en http://localhost:3033');
})