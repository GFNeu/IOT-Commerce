const {User}= require("../models/Index")

function isAdmin(req, res, next){
    User.findByPk(req.params.userAdmin)
    .then(user => {
        if (user.isAdmin){
            next()
        }else{
            res.status(401).send("No autorizado")
        }
    })
}

module.exports= isAdmin