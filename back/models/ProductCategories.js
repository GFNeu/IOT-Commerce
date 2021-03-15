const S = require("sequelize");
const db = require("../db/index");



class ProductCategories extends Model {}

ProductCategories.init(
  {
    product_id: {
      type: S.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: S.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    sequelize: db, modelName: "ProductCategories" 
  }
);

module.exports = ProductCategories;