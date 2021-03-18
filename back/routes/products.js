const router = require("express").Router();
//const {User} = require("../models")

const {
  getAll,
  getOne,
  
  byCategory,
  addOne,
  deleteOne,
  getProductsByKeyword,
  findOneProduct,
  editOne,
} = require("../controllers/products");
const { addReview, getReviewsByProduct } = require("../controllers/reviews");

/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/
//aca ya estoy parado sobre /products !


router.get("/search", getProductsByKeyword);
router.put("/:id", editOne);
router.get("/admin/:name", getOne);
router.get("/byCategory/:id", byCategory);
router.get("/:id/reviews", getReviewsByProduct);
router.post("/:id/reviews", addReview);

router.get("/", getAll);

//ADMIN
router.post("/", addOne);
router.delete("/:id", deleteOne);

module.exports = router;
