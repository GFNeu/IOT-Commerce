const {Categories} = require("../models/Index");


const categoriesController = {
    allCategories(req, res, next) {
        Categories.findAll()
        .then(categorias => res.send(categorias))
        .catch(err=> next(err)) // Se usaba asi el error MW?
  
  },
    oneCategory(req, res, next){
      Categories.findByPk(req.params.id)
      .then(category => res.send(category))
      .catch(err => next(err))
    },

  createCategory (req, res, next){
    Categories.create({
      statusDescription: req.body.statusDescription
    }).then(category => Categories.findAll().then(categorias=> res.send(categorias))) // Revisar que se manda al front
    .catch(err => next(err))
  },
  changeCategory(req, res, next){
    Categories.findByPk(req.params.id)
    .then(category=> category.update({
      statusDescription: req.body.statusDescription
    })
    .then(category => Categories.findAll().then(categories => res.send(categories))))
    
    .catch(err => next(err))
  },
  deleteCategory(req, res, next){
    Categories.findByPk(req.params.id)
    .then(category => category.destroy()
          .then(category => Categories.findAll().then(categories => res.send(categories))))
    .catch(err=>next(err))
  }


};

module.exports = categoriesController;