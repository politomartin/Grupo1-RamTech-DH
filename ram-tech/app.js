const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const localsMiddleware = require('./middlewares/localsMiddleware');
const adminLocalsMiddleware = require('./middlewares/adminLocalsMiddleware');

app.use(session({
    secret: "This is a secret phrase",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(localsMiddleware);
app.use(adminLocalsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api/apis');

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter)

app.listen(3036, () => {
    console.log('Servidor iniciado en http://localhost:3036');
})