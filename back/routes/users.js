const router = require("express").Router();
const {
  editUser,
  changePermits,
  deleteUser,
  findUsers,
  findOneUser,
} = require("../controllers/users");
const order = require("./order");



router.use("/orders", order);
router.get("/:name", findOneUser);
router.get("/", findUsers);
router.put("/:id", editUser);
router.put("/:id/permits", changePermits);
router.delete("/:id", deleteUser);


module.exports = router;
