const S = require("sequelize");
const db = require("../db/index");

class OrderProducts extends S.Model {}

OrderProducts.init(
  {
    cantidad: {
      type: S.INTEGER,
      allowNull: true,
    },
    precio: {
      type: S.FLOAT,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "OrderProducts" }
);

module.exports = OrderProducts;