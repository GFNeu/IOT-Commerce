<<<<<<< HEAD
const {Products, Reviews, Categories} = require("../models/Index");
const { Op } =require ('sequelize');
=======
const { Products, Reviews, Categories } = require("../models/Index");
const ProductCategories = require("../models/ProductCategories");
const { Op } = require("sequelize");
>>>>>>> 6d0332bf74831bbdec9813c384edcc33153c9c9f

const productsController = {
  getAll(req, res, next) {
    Products.findAll()
      .then((products) => res.send(products))
      .catch((err) => next(err)); // Se usaba asi el error MW?
  },
  getOne(req, res, next) {
    Products.findByPk(req.params.id)
      .then((product) => res.send(product))
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

  addReview(req, res, next) {
    Reviews.create({
      /*Llenar con
        campo de review: req.body.datoparacampo */
      productId: req.params.id, //Ver con que nombre se creo el id del producto
    })
      .then((review) =>
        Products.findByPk(req.params.id).then((product) => res.send(product))
      )
      .catch((err) => next(err));
  },

  addOne(req, res, next) {
    Products.create(req.body)

      .then((product) => res.send(product))
      .catch((err) => console.log(err));
  },

  changeOne(req, res, next) {
    Products.findByPk(req.params.id)
      .then((product) =>
        product
          .update(req.body)
          .then((product) =>
            Products.findAll().then((products) => res.send(products))
          )
      )
      .catch((err) => next(err));
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
    User.findByPk(req.params.id)
      .then((product) => product.update(req.body))
      .then((product) => res.send(product))
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
