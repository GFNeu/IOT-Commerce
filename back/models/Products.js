const S = require("sequelize");
const db = require("../db/index");

class Products extends S.Model {}

Products.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.STRING,
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
