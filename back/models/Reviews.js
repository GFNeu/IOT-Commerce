const S = require("sequelize");
const db = require("../db/index");

class Reviews extends S.Model {}

Reviews.init(
  {
    descripcion: {
      type: S.STRING,
      allowNull: false,
    },
    puntaje: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Reviews;
