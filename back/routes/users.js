const router = require("express").Router();
const {
  editUser,
  changePermits,
  deleteUser,
  findUsers,
  findOneUser,
} = require("../controllers/users");
const order = require("./order");

router.get("/ ", findUsers);

router.get("/:name", findOneUser);
router.put("/:id", editUser);
router.put("/:id/permits", changePermits);
router.use("/:id/orders", order);
router.delete("/:id", deleteUser);


module.exports = router;
