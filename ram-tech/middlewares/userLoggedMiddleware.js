function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

    if (req.session.user) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

    next();

}

module.exports = userLoggedMiddleware;
