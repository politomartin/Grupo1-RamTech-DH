const User = require('../data/users.json');

function guestMiddleware (req, res, next) {
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    
    if (req.session.userLogged) {
        return res.redirect("/users/profile")
    }

    console.log(userFromCookie);

    next();
}

module.exports = guestMiddleware