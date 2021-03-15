const router = require('express').Router()
//const {User} = require("../models")
const {getAll, getOne, byCategory, addReview, addOne, changeOne, deleteOne}= require("../controllers/products")
const { getReviewsByProduct } = require('../controllers/reviews')


/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/


router.get("/:id/reviews", getReviewsByProduct)
router.get("/:id", getOne)
router.get("/byCategory/:id", byCategory)
router.post("/:id/reviews", addReview)
router.get("/", getAll)

//ADMIN
router.post("/", addOne)
router.put("/:id", changeOne)
router.delete("/:id", deleteOne)




module.exports = router