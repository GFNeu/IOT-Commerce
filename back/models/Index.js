const Categories = require("./Categories");
const Order = require("./Order");
const OrderStatus = require("./OrderStatus");
const Products = require("./Products");
const Reviews = require("./Reviews");
const User = require("./Users");
const OrdersProducts= require("./OrderProducts")
const db = require("../db/index");
const ProductCategories = require("./ProductCategories");


// ACA, EN EL INDEX, IMPORTAMOS TODOS LOS MODELOS Y HACEMOS LAS RELACIONES
// EXPORTAMOS TODOS LOS MODELOS, ESTE INDEX, ES EL UNICO PUNTO DE CONTACTO CON EL EXTERIOR
// EN LO QUE HACE A MODELOS DE DATOS Y SUS RELACIONES

// RECORDAR QUE LAS RELACIONES AGREGAN METODOS


// REVIEWS
User.hasMany(Reviews);
Reviews.belongsTo(Products);
Reviews.belongsTo(User)

// ORDERS
User.hasMany(Order);
Order.belongsTo(User);
OrderStatus.hasMany(Order);
Order.belongsToMany(Products, {through: OrdersProducts});
Products.belongsToMany(Order, {through: OrdersProducts});

// PRODUCTS
// Categories.belongsToMany(Products, {through: "products_categories"});
// Products.belongsToMany(Categories,{through: "products_categories"});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Categories, {
    through: ProductCategories,
    foreignKey: 'product_id',
  });
  
  Categories.belongsToMany(Products, {
    through: ProductCategories,
    foreignKey: 'category_id',
  });

module.exports = { db, Categories, Order, OrderStatus, Products, Reviews, User};