const {Products, Reviews} = require("../models/Index");

const reviewsControllers ={

    getReviewsByProduct(req,res,next){
        Reviews.findAll({
            where:{productId : req.params.id}
        })
        .then(reviews => res.send(reviews))
        .catch(err=> next(err))
    }

}

module.exports = reviewsControllers;