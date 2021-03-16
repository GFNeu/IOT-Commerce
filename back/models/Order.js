const S = require("sequelize");
const db = require("../db/index");

class Order extends S.Model {}

Order.init(
  {
    statusDescription: {
      type: S.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Order;
