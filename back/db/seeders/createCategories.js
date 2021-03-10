"use strict";

/* const { Categories } = require("../../models/Categories"); */

module.exports = {
  up: () => {
    const categorias = [
      {
        statusDescription: "Categoria 1",
      },
      {
        statusDescription: "Categoria 2",
      },
      {
        statusDescription: "Categoria 3",
      },
      {
        statusDescription: "Categoria 4",
      },
    ];
    return queryInterface.bulkInsert("categories", categorias);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
