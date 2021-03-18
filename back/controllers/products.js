const { Products, Reviews, Categories } = require("../models/Index");
const ProductCategories = require("../models/ProductCategories");
const { Op } = require("sequelize");

const productsController = {
  getAll(req, res, next) {
    Products.getAllWithReview()
      .then((products) => res.send(products))
      .catch((err) => next(err)); // Se usaba asi el error MW?
  },
  getOne(req, res, next) {
    console.log("REQ PARAAAAMS", req.params)
    const queryUser = req.params.name;
    Products.findAll({
      where: {
        name: { [Op.iLike]: `%${queryUser}%` },
      },
    })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },
  
  byCategory(req, res, next) {
    Categories.findOne({
      where: { id: req.params.id },
      include: [{ model: Products }],
    })
      .then((category) => res.send(category.dataValues.products))
      .catch((err) => next(err));
  },

  
  addOne(req, res, next) {
    Products.create(req.body)

      .then((product) => res.send(product))
      .catch((err) => console.log(err));
  },

  deleteOne(req, res, next) {
    Products.findByPk(req.params.id)
      .then((product) =>
        product
          .destroy()
          .then((product) =>
            Products.findAll().then((products) => res.send(products))
          )
      )
      .catch((err) => next(err));
  },
  editOne(req, res, next) {
    console.log("ENTRE A ESTE CONTROLLER", req.body)
    Products.findByPk(req.params.id)
      .then((product) => {
        console.log(product)
        product.update(req.body)
      })
       .then((product) => {res.send(product)})
       .catch((err) => next(err));
  },

 
  getProductsByKeyword(req,res,next){
    const baseQuery = req.query.name 
    const splitQuery= req.query.name.split(" ")
    console.log("SPLITEADO", splitQuery)
    Products.findAll({
      where :{ [Op.or]: [
        { name: {[Op.iLike]: `%${baseQuery}%`}},
        {name: {[Op.and]: [
          {[Op.iLike]: `%${splitQuery[0]}%`},
          {[Op.iLike]: `%${splitQuery[1]}%`},
        ]}},
        { name: {[Op.in]: splitQuery}}
      ] 
      }
    }).then(productsByKeyword => {
      console.log("LO ENCONTRADO", productsByKeyword)
      res.send(productsByKeyword)})
    .catch(err => next(err))
  },
   
  getById(req,res,next){
    Products.findByPk(Number(req.params.id))
            .then(product => res.send(product))
            .catch(next)
  },


  findOneProduct(req, res, next) {
    const query = req.params.name;
    Products.findAll({
      where: {
        name: { [Op.iLike]: `%${query}%` },
      },
    })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },
};

module.exports = productsController;
