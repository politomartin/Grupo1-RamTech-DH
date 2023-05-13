function adminMiddleware(req, res, next) {
    if (req.session.user && req.session.user.user_roles_id != 1) {
        return res.redirect("/")
    }
    if (req.session.user && req.session.user.user_roles_id == 1) {
    }
    next()

}

module.exports = adminMiddleware