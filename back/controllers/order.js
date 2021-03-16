const {Order, User, OrderStatus} = require("../models/Index");

const ordersController = {
      
    createOrder(req,res,next){
        console.log("user ID: ", req.params.id)
        console.log("body: ", req.body)

        User.findByPk(req.body.userId)
            .then(user=>{
               return Order.create()
                     .then((order)=> {
                         return OrderStatus.findByPk(4)//Status: pending(id 4)
                                    .then(status=> {
                                            console.log(status)
                                        return status.hasOrder(order)})
                                    .then(()=> order)
                        })
                     .then(order => {
                         user.setOrder(order)
                     })
            })
            .then(order => res.send(order))
    }
}

module.exports = ordersController