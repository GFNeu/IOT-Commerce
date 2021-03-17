const router = require("express").Router();
//const {User} = require("../models")
<<<<<<< HEAD
const {getAll, getOne, byCategory, addReview, addOne, changeOne, deleteOne, getProductsByKeyword}= require("../controllers/products")
const { getReviewsByProduct } = require('../controllers/reviews')

=======

 
const {
  getAll,
  getOne,
  addReview,
  byCategory,
  addOne,
  changeOne,
  deleteOne,
  getProductsByKeyword,
  findOneProduct,
} = require("../controllers/products");
const { getReviewsByProduct } = require("../controllers/reviews");
>>>>>>> 563a80fccd60b55b13f683ffd1849ac627e66698

/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/
//aca ya estoy parado sobre /products !
router.get("/:name", findOneProduct);
router.get("/:id/reviews", getReviewsByProduct);
router.get("/search", getProductsByKeyword);
router.get("/:id", getOne);
router.get("/byCategory/:id", byCategory);
router.post("/:id/reviews", addReview);
router.get("/", getAll);

//ADMIN
router.post("/", addOne);
router.put("/:id", changeOne);
router.delete("/:id", deleteOne);

module.exports = router;
