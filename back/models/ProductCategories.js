const S = require("sequelize");
const db = require("../db/index");



class ProductCategories extends S.Model {}

ProductCategories.init(
  {
    id: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    product_id: {
      type: S.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    category_id: {
      type: S.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    sequelize: db, modelName: "productcategories" 
  }
);

module.exports = ProductCategories;