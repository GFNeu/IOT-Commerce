const Categories = require("./Categories");
const Orders = require("./Orders");
const OrderStatus = require("./OrderStatus");
const Products = require("./Products");
const Reviews = require("./Reviews");
const User = require("./Users");
const OrdersProducts= require("./OrderPoducts")
const db = require("../db/index");


// ACA, EN EL INDEX, IMPORTAMOS TODOS LOS MODELOS Y HACEMOS LAS RELACIONES
// EXPORTAMOS TODOS LOS MODELOS, ESTE INDEX, ES EL UNICO PUNTO DE CONTACTO CON EL EXTERIOR
// EN LO QUE HACE A MODELOS DE DATOS Y SUS RELACIONES

// RECORDAR QUE LAS RELACIONES AGREGAN METODOS


// REVIEWS
User.hasMany(Reviews);
Reviews.belongsTo(Products);
Reviews.belongsTo(User)

// ORDERS
User.hasMany(Orders);
OrderStatus.hasMany(Orders);
Orders.belongsToMany(Products, {through: "orders_products"});
Products.belongsToMany(Orders,{through: "orders_products"});
Orders.belongsTo(User,{through: "orders_products"});

// PRODUCTS
Categories.belongsToMany(Products, {through: "products_categories"});
Products.belongsToMany(Categories,{through: "products_categories"});

module.exports = { db, Categories, Orders, OrderStatus, Products, Reviews, User };