const router = require('express').Router()
const auth = require('./auth')
const categories = require('./categories')
const order = require('./order')
const products = require('./products')
const users = require('./users')


router.use('/auth', auth)
router.use('/categories', categories)
router.use('/checkout', order)
router.use('/products', products)
router.use('/users', users)
 


module.exports = router