const S = require("sequelize");
const db = require("../db/index");
class OrderStatus extends S.Model {}

OrderStatus.init(
  {
    statusType: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orderStatus" }
);

module.exports = OrderStatus;
