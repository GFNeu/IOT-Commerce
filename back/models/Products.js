const S = require("sequelize");
const db = require("../db/index");
const Reviews = require("./Reviews")

class Products extends S.Model {

  static getAllWithReview (limit = null, offset = null){
    return Products.findAll({
      include: {
      model: Reviews,
      attributes: ['puntaje']
    },
    limit: limit,
    offset: offset
  })
    .then(products =>{
        return products.map(p => {
          const rating = p.reviews.reduce((acc, item)=> { return acc += item.puntaje}, 0)/p.reviews.length
          const {id, photo, name, description, price, mark, model, stock, createdAt, updatedAt} = p
          return {id, photo, name, description, price, mark, model, stock, createdAt, updatedAt, rating}
        }).sort((a,b)=>b.rating - a.rating) 
        
    })
  }

}

Products.init(
  {
    name: {
      type: S.TEXT,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    photo: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.FLOAT,
      allowNull: false,
    },
    mark: {
      type: S.STRING,
    },
    model: {
      type: S.STRING,
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Products;
