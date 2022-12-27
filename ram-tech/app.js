const express = require("express")
const path = require("path")

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
})

app.listen(3033, () => {
    console.log('Servidor iniciado en http://localhost:3033');
})
