const S = require("sequelize");
const db = require("../db/index");

class Order extends S.Model {}

Order.init(
  {
    calle: {
      type: S.STRING,
      //allowNull: true,
    },
    numero: {
      type: S.STRING,
      //allowNull: true,
    },
    piso: {
      type: S.STRING,
      //allowNull: true,
    },
    departamento: {
      type: S.STRING,
      //allowNull: true,
    },
    localidad: {
      type: S.STRING,
      //allowNull: true,
    },
    provincia: {
      type: S.STRING,
      //allowNull: true,
    },
    cp: {
      type: S.STRING,
      //allowNull: true,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Order;
