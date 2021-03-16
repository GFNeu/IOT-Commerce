const {User} = require("../models/Index")

const usersController = {
    findUsers(req, res, next) {
        User.findAll()
        .then(products => res.send(products))
        .catch(err=> next(err)) // Se usaba asi el error MW?
  
  },

  editUser(req, res, next) {
     User.findByPk(req.params.id)
     .then(user => user.update(req.body))
            .then(user => res.send(user))
     .catch(err=> next(err))
  },

  deleteUser(req, res, next) {
    User.findByPk(req.params.id)
     .then(user => user.destroy())
            .then(user => res.send("Usuario eliminado") )
     .catch(err=> next(err))
  },
  changePermits(req, res, next) {
    User.findByPk(req.params.id)
     .then(user => {
        user.update({isAdmin : !user.isAdmin})})
            .then(user => {
                User.findByPk(req.params.id).then(user => {
                    console.log(user)
                    res.send("Permisos cambiados")})
                })
     .catch(err=> next(err))
  },
};

module.exports = usersController;