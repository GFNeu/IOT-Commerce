const {Order, User, Products, OrderStatus} = require("../models/Index");
const {OrderProducts} = require('../models/OrderProducts')
const { Op } = require("sequelize");
const { sendEmail} = require("../controllers/auth");


const ordersController = {
      
    createOrder(req,res,next){
        
        
        User.findByPk(req.body.userID)
            .then(user=>{
               return Order.create()
                     .then((order)=> {
                            order.orderStatusId = 4
                            order.userId = req.body.userID
                            return order.save()
                        })
                     
            })
            .then(order => {
                const carrito = req.body.carrito
                const productsIds = carrito.map(product => product.id)
                return Products.findAll({where: {
                    id: {
                        [Op.in] : productsIds
                    }
                }}).then(products=>{
                    products.forEach((product, index) => order.addProduct(product, {through: { cantidad: carrito[index].cantidad, precio: carrito[index].precio }}))
                })
            })
            .then(()=> res.sendStatus(201))
            .catch(next)
                        
    },

    updateOrder(req,res,next){
        console.log(req.body.carrito)
        Order.findAll({
            where: {
                [Op.and]: [
                    {orderStatusId: 4},
                    {userId: req.body.userID}
                ]
            },
        })
        .then(order => {
            console.log(Object.keys(order[0].__proto__))
            const carrito = req.body.carrito
            const productsIds = carrito.map(product=> product.id)
            Products.findAll({where: {
                id: {
                    [Op.in] : productsIds
                }
            }})
            .then(products=>{
                products.forEach((product, index)=>order[0].addProducts(product, {through: {cantidad: carrito[index].cantidad, precio: carrito[index].precio}})
            )})
            
        })
        .then(()=>res.sendStatus(204))
        .catch(next)
    },

    removeAmount(req,res,next){
        console.log(req.body.carrito)
        Order.findAll({
            where: {
                [Op.and]: [
                    {orderStatusId: 4},
                    {userId: req.body.userID}
                ]
            },
        })
        .then(order => {
            console.log("ORDER",order)
            console.log("Producto id en el body ", req.body.productId)
            return Products.findByPk(req.body.productId)
                    .then((product)=>{
                        return order[0].removeProduct(product)
                    })
                    .then(()=>{
                        return order[0].getProducts()
                    })
                    .then(products=>{
                        if(products.length === 0){
                            return order[0].destroy()
                        }else{
                            return "ok"
                        }
                    })
            
        })
        .then((algo)=>{
            res.send("se borró la orden")
        })
        .catch(next)
    },

    getPendingOrder(req,res,next){
        console.log("USER",req.user)
        console.log("PARAMS",typeof req.params.id)
        if(req.user.id != req.params.id ){
            return res.sendStatus(403)
        }else{
            Order.findAll({
                where: {
                    [Op.and]: [
                        {orderStatusId: 4},
                        {userId: req.params.id}
                    ] 
                },
                include: [
                    {
                      model: Products,
                      through: OrderProducts,
                    },
                  ],
            }).then(orders => res.send(orders)) 
        }
                
    },

    checkout(req,res,next){
        console.log(req.body.address)
       
        Order.findAll({
            where: {
                [Op.and]: [
                    {orderStatusId: 4},
                    {userId: req.body.userID}
                ]
                
            },
        })
        .then(orders => {
            orders[0].orderStatusId = 2
            orders[0].calle = req.body.address.calle
            orders[0].numero = req.body.address.numero
            orders[0].piso = req.body.address.piso
            orders[0].departamento = req.body.address.departamento
            orders[0].localidad = req.body.address.localidad
            orders[0].provincia = req.body.address.provincia
            orders[0].cp = req.body.address.cp
            return orders[0].save()
        })
        .then(
            ()=>{
                return User.findByPk(req.params.id)
            }
        )
        .then((user)=>{
            console.log("UUUSER",user)
            sendEmail("IOT Commerce", user.email , "Compra exitosa","",`<h1>Compra confirmada <br> Gracias ${user.name}</h1>`)
            res.send("Checkout correcto")
        })
        .catch(next)
    },

    removeOrder(req,res,next){
        Order.findAll({
            where: {
                [Op.and]: [
                    {orderStatusId: 4},
                    {userId: req.params.id}
                ]
            },
        })
        .then(orders=>orders[0].destroy())
        .then(()=>res.send("orden borrada"))
        .catch(next)
    },

    getPastOrders(req,res,next){
       
        Order.findAll({
            where: {
                [Op.and]: [
                    {orderStatusId: 2},
                    {userId:req.params.id}
                ]
            },
            include: [
                {
                  model: Products,
                  through: OrderProducts,
                },
                { model: OrderStatus }
              ]
        })
        .then(orders=>res.send(orders))
    },

    getAllOrders(req, res, next) {
        Order.findAll(
            {
                include: [{ model: OrderStatus } , { model: User }],
            }
        )
          .then((order) => {
            console.log("order en el .then ", order)  
            res.send(order)})
          .catch((err) => next(err)); // Se usaba asi el error MW?
      },

    getOrderById(req,res,next){
        Order.findAll({
            where: {
                id: Number(req.params.orderId)
            },
            include: [
                {
                  model: Products,
                  through: OrderProducts,
                },
                { model: OrderStatus }
              ]
        })
        .then(orders=>res.send(orders))
    },

    onlyOneForAdmin(req,res,next){
        Order.findOne({where:{
            id: req.params.id
        }, include: [
            {model: OrderStatus},
            {
                model: Products,
                through: OrderProducts,
              },
              {model: User}
        ]})
        .then(orders=>res.send(orders))
    },

    changeState(req,res,next){
        console.log("EL BODY", typeof(Number(req.body.estado)))
        console.log("EL ID", req.params.id)
        const estado= Number(req.body.estado)
        console.log("INFO PROCESADA", typeof(estado), estado)
        Order.findByPk(req.params.id)
        .then(order=>{
            console.log("EL VIEJO ESTADO", order.orderStatusId)
            order.orderStatusId= estado
            return order.save()
        }).then(()=> Order.findByPk(req.params.id).then(order=>{
            console.log("LA ORDEN CON EL NUEVO ESTADOOOOO", order.orderStatusId)
            res.send(order)}))
        .catch(e=> next(e))
    }

}

module.exports = ordersController