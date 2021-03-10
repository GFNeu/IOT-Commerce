"use strict";

const faker = require("faker");
/* const { Users } = require("../../models/Users"); */

module.exports = {
  // se ejecuta cuando se hace la siempra
  up: (queryInterface, Sequelize) => {
    let usuarios = [
      {
        name: "santi",
        lastName: "santu",
        email: "santi@santi.com",
        isAdmin: true,
        password: "1234",
      },
      {
        name: faker.name.findName(), // ?
        lastName: faker.lastName,
        email: faker.email,
        isAdmin: false,
        password: "1234",
      },
      {
        name: faker.name,
        lastName: faker.lastName,
        email: faker.email,
        isAdmin: false,
        password: "1234",
      },
      {
        name: faker.name,
        lastName: faker.lastName,
        email: faker.email,
        isAdmin: false,
        password: "1234",
      },
      {
        name: faker.name,
        lastName: faker.lastName,
        email: faker.email,
        isAdmin: false,
        password: "1234",
      },
      {
        name: faker.name,
        lastName: faker.lastName,
        email: faker.email,
        isAdmin: false,
        password: "1234",
      },
    ];
    return queryInterface.bulkInsert("users", usuarios); //(nombre tabla, variable con contenido)
  },

  // se ejecuta cuando se deshace la siempra
  // borra todo o con undo, lo último
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {}); // BORRA TODOS LOS USUARIOS, cuando ejecutamos undo --nombreseed
    // ampliar descripcion
  },
};
