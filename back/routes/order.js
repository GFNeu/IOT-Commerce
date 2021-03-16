const router = require('express').Router()
const {createOrder, getPendingOrder, updateOrder, checkout, removeOrder, getPastOrders} = require('../controllers/order')

//get la orden que este pending
router.get('/pending', getPendingOrder)

//get todas las órdenes completas
router.get('/', getPastOrders)

//CHECKOUT
router.put('/checkout', checkout)

//MODIFICAR UNA ORDEN
router.put('/', updateOrder)

//CREATE ORDER
router.post('/', createOrder)

//BORRAR ORDEN
router.delete('/', removeOrder)



module.exports = router