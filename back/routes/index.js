const router = require('express').Router()
const auth = require('./auth')
const categories = require('./categories')
const products = require('./products')
const users = require('./users')
const orders = require("./order")


router.use('/auth', auth)
router.use('/categories', categories)
router.use('/products', products)
router.use('/users', users)
router.use("/orders", orders);

// a /orders se accede a través de /users/:id/orders
 


module.exports = router