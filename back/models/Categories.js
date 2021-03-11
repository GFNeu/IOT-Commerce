const S = require("sequelize");
const db = require("../db/index");

class Categories extends S.Model {}

Categories.init(
  {
    statusDescription: {
      type: S.TEXT,
      allowNull: false,
    },
    photo: {
      type: S.STRING,
     // allowNull: false,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;
