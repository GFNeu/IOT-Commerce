const {Products, Reviews} = require("../models/Index");


const productsController = {
    getAll(req, res) {
        Products.findAll()
        .then(products => res.send(products))
        .catch(err=> next(err)) // Se usaba asi el error MW?
  
  },
  getOne(req, res) {
    Products.findByPk(req.params.id)
      .then(product => res.send(product))
      .catch(err=> next(err))
    
  },
  byCategory(req, res, next) {
    Products.findAll({where:{categoriesId: req.params.id}, include: "products_categories"})
    .then(products => res.send(products))
    .catch(err => next(err))
    
  },

  addReview(req, res) { 
    Reviews.create({
        /*Llenar con
        campo de review: req.body.datoparacampo */
        productId: req.params.id //Ver con que nombre se creo el id del producto
    })
      .then(review => Products.findByPk(req.params.id).then(product=> res.send(product)))
      .catch(err=> next(err))
  },

  addOne(req, res, next) { 
    console.log(req.body)
    Products.create(req.body)
    
      .then(product => res.send(product))
      .catch(err=> console.log(err))
  },

  changeOne(req, res) {
     Products.findByPk(req.params.id)
     .then(product => product.update(req.body)
            .then(product => Products.findAll().then(products => res.send(products))))
     .catch(err=> next(err))
  },
  deleteOne(req, res) {
    Products.findByPk(req.params.id)
     .then(product => product.destroy()
            .then(product => Products.findAll().then(products => res.send(products))))
     .catch(err=> next(err))
  },
};

module.exports = productsController;