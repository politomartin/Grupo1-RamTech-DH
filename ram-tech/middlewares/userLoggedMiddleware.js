const db = require("../database/models");

async function userLoggedMiddleware(req, res, next) {

    let emailInCookie = req.cookies.userEmail;
    if (!emailInCookie) {
        return next()
    }

    try {
        let userFromCookie = await db.User.findOne({
            where: {
                email: emailInCookie
            }
        });

        if (userFromCookie) {
            next()
        }
    }
    catch (err) {
        console.log(err);
    }

    next();
}

module.exports = userLoggedMiddleware; 