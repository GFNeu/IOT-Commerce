const router = require("express").Router();
//const {User} = require("../models")

<<<<<<< HEAD
 
=======
>>>>>>> 6d0332bf74831bbdec9813c384edcc33153c9c9f
const {
  getAll,
  getOne,
  addReview,
  byCategory,
  addOne,
  changeOne,
  deleteOne,
  getProductsByKeyword,
<<<<<<< HEAD
  findOneProduct
=======
  findOneProduct,
  editOne,
>>>>>>> 6d0332bf74831bbdec9813c384edcc33153c9c9f
} = require("../controllers/products");
const { getReviewsByProduct } = require("../controllers/reviews");

/*RUTAS NECESARIAS
GET ALL PRODUCTS
ONE PRODUCT
ADD PRODUCT
CHANGE PRODUCT
DELETE PRODUCT
*/
//aca ya estoy parado sobre /products !
<<<<<<< HEAD
router.get("/search", getProductsByKeyword);
=======
router.put("/:id", editOne);
>>>>>>> 6d0332bf74831bbdec9813c384edcc33153c9c9f
router.get("/:name", findOneProduct);
router.get("/:id/reviews", getReviewsByProduct);

router.get("/:id", getOne);
router.get("/byCategory/:id", byCategory);
router.post("/:id/reviews", addReview);
router.get("/", getAll);

//ADMIN
router.post("/", addOne);
router.put("/:id", changeOne);
router.delete("/:id", deleteOne);

module.exports = router;
