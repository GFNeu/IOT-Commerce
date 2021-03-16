const router = require('express').Router()
const auth = require('./auth')
const categories = require('./categories')
const products = require('./products')
const users = require('./users')



router.use('/auth', auth)
router.use('/categories', categories)
router.use('/products', products)
router.use('/users', users)
// a /orders se accede a través de /users/:id/orders
 


module.exports = router