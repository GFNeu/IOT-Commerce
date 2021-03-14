const router = require('express').Router()
//const {User} = require("../models")
const {getAll, getOne, byCategory, addReview, addOne, changeOne, deleteOne}= require("../controllers/products")
/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/

router.get("/", getAll)
router.get("/:id", getOne)
router.get("/byCategory/:id", byCategory)
router.post("/:id/reviews", addReview)
//ADMIN
router.post("/", addOne)
router.put("/:id", changeOne)
router.delete("/:id", deleteOne)




module.exports = router