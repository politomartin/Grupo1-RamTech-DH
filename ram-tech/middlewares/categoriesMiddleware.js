const db = require('../database/models');

function categoriesMiddleware(req, res, next) {
    db.Category.findAll()
        .then((categories) => {
            res.locals.categories = categories;
            next();
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = categoriesMiddleware;
