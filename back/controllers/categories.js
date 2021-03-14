const {Categories} = require("../models/Index");


const categoriesController = {
    allCategories(req, res) {
        Categories.findAll()
        .then(categorias => res.send(categorias))
        .catch(err=> next(err)) // Se usaba asi el error MW?
  
  },

};

module.exports = categoriesController;