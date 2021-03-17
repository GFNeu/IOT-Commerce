const {Categories, Products} = require("../models/Index");
const { Op } = require("sequelize");
const ProductCategories = require("../models/ProductCategories");


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
  findOneCategory(req, res, next) {
      const queryCategory = req.params.name;
      Categories.findAll({
        where: { [Op.or]: [ 
          {
            statusDescription: { [Op.iLike]: `%${queryCategory}%` },
          },
          {
            id: req.params.name
          }
        ]
      }, include: [{ model: Products }]})
        .then((category) => {
          console.log(category)
          res.send(category)})
        .catch((err) => next(err));
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
    console.log(req.params)
    Categories.findByPk(req.params.id)
    .then(category => category.destroy()
          .then(category => Categories.findAll().then(categories => res.send(categories))))
    .catch(err=>next(err))
  },
  fromCategory(req,res, next){
    console.log(req.params)
    ProductCategories.findOne({where:{ 
      [Op.and]: [
      {category_id: req.params.categoryId},
      {product_id: req.params.productId}
     
    ]}}).then(relacion=> {
      relacion.destroy().then(()=> res.send("Removido de la categoria"))
    })
    .catch(e=>next(e))
  },
  toCategory(req, res, next){
    console.log(req.body)
    ProductCategories.findOne({where:{ 
      [Op.and]: [
      {category_id: req.body.category_id},
      {product_id: req.body.product_id}
     
    ]}}).then(relacion=> {
      if(!relacion){
        ProductCategories.create(req.body)
      .then(()=> res.send("Insertado a categoria"))
      .catch(e=> next(e))
      }else{
        res.send("La relacion ya existe")
      }
    })
    
  }


};

module.exports = categoriesController;