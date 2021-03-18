const router = require('express').Router()
const {createOrder, getPendingOrder, updateOrder, getAllOrders,checkout, removeOrder, getPastOrders, removeAmount, getOrderById} = require('../controllers/order')
const checkUserJWT = require('./auth/tokenUserMid')


//get una orden por id de un usuario
router.get('/:id/o/:orderId', getOrderById)

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

//get todas las órdenes 
router.get('/', getAllOrders)

module.exports = router