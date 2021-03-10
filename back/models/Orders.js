const S = require("sequelize");
const db = require("../db/index");

class Orders extends S.Model {}

Orders.init(
  {
    statusDescription: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Orders;
