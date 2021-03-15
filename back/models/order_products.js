const S = require("sequelize");
const db = require("../db/index");

class OrderProducts extends S.Model {}

OrderProducts.init(
  {
    orderId: {
      type: S.INTEGER,
      allowNull: false,
    },
    productId: {
        type: S.INTEGER,
        allowNull: false,
      },
  },
  { sequelize: db, modelName: "order_products" }
);

module.exports = OrderProducts;
