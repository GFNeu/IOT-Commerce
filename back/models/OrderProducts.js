const S = require("sequelize");
const db = require("../db/index");

class OrderProducts extends S.Model {}

OrderProducts.init(
  {
    cantidad: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  {
    precio: {
      type: S.FLOAT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "OrderProducts" }
);

module.exports = OrderProducts;