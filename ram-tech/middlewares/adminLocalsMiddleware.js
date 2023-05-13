function adminLocalsMiddleware(req, res, next) {
    res.locals.admin = false;
    if (req.session.user && req.session.user.user_roles_id == 1) {
        res.locals.admin = true;
    }
    next()

}
module.exports = adminLocalsMiddleware