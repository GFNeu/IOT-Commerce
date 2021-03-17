const {Products, Reviews, Categories} = require("../models/Index");
const ProductCategories = require("../models/ProductCategories");
const { Op } =require ('sequelize');

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
<<<<<<< HEAD
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
  }
=======
  getProductsByKeyword(req, res, next) {
    const baseQuery = req.query.name;

    Products.findAll({
      where: {
        name: { [Op.iLike]: `%${baseQuery}%` },
      },
    })
      .then((productsByKeyword) => res.send(productsByKeyword))
      .catch((err) => next(err));
  },
  findOneProduct(req, res, next) {
    const query = req.params.name;
    console.log(query);
    Products.findAll({
      where: {
        name: { [Op.iLike]: `%${query}%` },
      },
    })
      .then((productsByKeyword) => res.send(productsByKeyword))
      .catch((err) => next(err));
  },
>>>>>>> 563a80fccd60b55b13f683ffd1849ac627e66698
};

module.exports = productsController;
