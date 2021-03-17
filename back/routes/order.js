const router = require('express').Router()
const {createOrder, getPendingOrder, updateOrder, checkout, removeOrder, getPastOrders} = require('../controllers/order')

//get la orden que este pending
router.get('/:id/pending', getPendingOrder)

//get todas las órdenes completas
router.get('/:id', getPastOrders)

//CHECKOUT
router.put('/checkout', checkout)

//MODIFICAR UNA ORDEN
router.put('/:id', updateOrder)

//CREATE ORDER
router.post('/:id', createOrder)

//BORRAR ORDEN
router.delete('/:id', removeOrder)



module.exports = router