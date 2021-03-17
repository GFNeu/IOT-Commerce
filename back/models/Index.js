const Categories = require("./Categories");
const Order = require("./Order");
const OrderStatus = require("./OrderStatus");
const Products = require("./Products");
const Reviews = require("./Reviews");
const User = require("./Users");
const OrdersProducts= require("./OrderProducts")
const db = require("../db/index");
const ProductCategories = require("./ProductCategories");

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

Products.belongsToMany(Categories, {
    through: ProductCategories,
    foreignKey: 'product_id',
  });
  
  Categories.belongsToMany(Products, {
    through: ProductCategories,
    foreignKey: 'category_id',
  });

module.exports = { db, Categories, Order, OrderStatus, Products, Reviews, User};