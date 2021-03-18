const {Products, Reviews} = require("../models/Index");
const {Op} = require('sequelize');

const reviewsControllers ={

    getReviewsByProduct(req,res,next){
        Reviews.findAll({
            where:{productId : req.params.id}
        })
        .then(reviews => res.send(reviews))
        .catch(err=> next(err))
    },
    addReview(req, res, next) {
       console.log("PRODUCTO UNOOOO", req.body)
       console.log(req.params)
        Reviews.findAll({
            where:{ [Op.and] :[
                { productId :req.params.id },
                { userId: req.body.userId }
                ]
            }
        }).then(review=>{
            console.log(review)
            console.log(review.length)
            if(review.length < 1){
                Reviews.create({
                    descripcion : req.body.review,
                    productId : req.params.id,
                    userId : req.body.userId,
                    puntaje: req.body.puntaje
                })
                  .then(review =>res.send(review))
                  
            }else{
                //console.log(review);
                res.send('ya existe una review')
            }
        })
        .catch((err) => next(err));
        
      }
    

}

module.exports = reviewsControllers;