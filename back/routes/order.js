const router = require('express').Router()
const {createOrder, getPendingOrder, updateOrder, checkout, removeOrder, getPastOrders, removeAmount} = require('../controllers/order')
const checkUserJWT = require('./auth/tokenUserMid')


//get la orden que este pending
router.get('/:id/pending', checkUserJWT ,getPendingOrder)

//get todas las órdenes completas
router.get('/:id',getPastOrders)

//CHECKOUT
router.put('/:id/checkout', checkout)

//MODIFICAR UNA ORDEN
router.put('/:id/removeAmount', removeAmount)

//MODIFICAR UNA ORDEN
router.put('/:id', updateOrder)

//CREATE ORDER
router.post('/:id',createOrder)

//BORRAR ORDEN
router.delete('/:id', removeOrder)



module.exports = router