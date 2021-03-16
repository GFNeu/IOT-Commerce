const router = require('express').Router()
const {createOrder} = require('../controllers/order')

//get la orden que este pending
router.get('/pending', (req,res,next)=>{
    res.send("esta es la ruta de órdenes GET PENDING")
})

//get todas las órdenes completas
router.get('/', (req,res,next)=>{
    res.send("esta es la ruta de órdenes GET ALL")
})

//MODIFICAR UNA ORDEN
router.put('/', (req,res,next)=>{
    res.send("esta es la ruta de órdenes PUT")
})

//CHECKOUT
router.post('/checkout', (req,res,next)=>{
    res.send("esta es la ruta de órdenes CHECKOUT")
})

//CREATE ORDER
router.post('/', createOrder)

//BORRAR ORDEN
router.delete('/', (req,res,next)=>{
    res.send("esta es la ruta de órdenes DELETE")
})



module.exports = router