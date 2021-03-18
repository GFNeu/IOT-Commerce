const Categories = require("./Categories");
const Order = require("./Order");
const OrderStatus = require("./OrderStatus");
const Products = require("./Products");
const Reviews = require("./Reviews");
const User = require("./Users");
const OrderProducts= require("./OrderProducts")
const db = require("../db/index");
const ProductCategories = require("./ProductCategories");

// REVIEWS
User.hasMany(Reviews);
Reviews.belongsTo(Products);
Products.hasMany(Reviews)
Reviews.belongsTo(User)

// ORDERS
User.hasMany(Order);
Order.belongsTo(User);
OrderStatus.hasMany(Order);
Order.belongsToMany(Products, {through: OrderProducts});
Products.belongsToMany(Order, {through: OrderProducts});

Products.belongsToMany(Categories, {
    through: ProductCategories,
    foreignKey: 'product_id',
  });
  
  Categories.belongsToMany(Products, {
    through: ProductCategories,
    foreignKey: 'category_id',
  });

module.exports = { db, Categories, Order, OrderStatus, Products, Reviews, User};