//ajskdbnaskjndszkjdnakjsdnkjasnd
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/e-commerce", {
  logging: false, // set to console.log to see the raw SQL queries
});

module.exports = db;