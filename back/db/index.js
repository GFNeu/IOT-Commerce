//ajskdbnaskjndszkjdnakjsdnkjasnd
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/iot-commerce", {
  logging: false, // set to console.log to see the raw SQL queries

  // Configuramos Seeds
 /*  seederStorage: "json",
  seederStoragePath: ""  */// completar y ver

});

module.exports = db;