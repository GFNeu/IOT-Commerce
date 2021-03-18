const router = require("express").Router();
const {
  editUser,
  changePermits,
  deleteUser,
  findUsers,
  findOneUser,
  findExactUser
} = require("../controllers/users");
const order = require("./order");




router.use("/orders", order);
router.get("/admin/:id", findExactUser)
router.get("/:name", findOneUser);
router.get("/", findUsers);
router.put("/:id/permits", changePermits);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
