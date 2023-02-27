const express = require("express")
const path = require("path")
const methodOverride =  require('method-override'); 

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'))

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "./views"));

const mainRouter = require('./routes/main'); 
const productsRouter = require('./routes/products'); 
const usersRouter = require('./routes/users'); 

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3033, () => {
    console.log('Servidor iniciado en http://localhost:3033');
})