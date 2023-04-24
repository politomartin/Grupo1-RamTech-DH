function localsMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.user) {
        res.locals.isLogged = true;
    }

    next();

}

module.exports = localsMiddleware;