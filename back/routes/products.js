const router = require('express').Router()
//const {User} = require("../models")
const {getAll, getOne, addReview, addOne, changeOne, deleteOne}= require("../controllers/products")
/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/

router.get("/", getAll)
router.get("/:id", getOne)
router.post("/:id/reviews", addReview)
router.post("/", addOne)
router.put("/:id", changeOne)
router.delete("/:id", deleteOne)




module.exports = router