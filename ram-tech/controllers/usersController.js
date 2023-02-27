const controller = {
    
    login: (req,res) => {
        res.render("./users/login");
    },

    register: (req,res) => {
        res.render("./users/register");
    },
    profile: (req,res) => {
        res.render("./users/profile");
    }
}

module.exports = controller;