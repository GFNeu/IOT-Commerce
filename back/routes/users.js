const router = require("express").Router();
const {
  editUser,
  changePermits,
  deleteUser,
  findUsers,
  findOneUser,
} = require("../controllers/users");
const order = require("./order");

// export function isAdmin(req, res, next){
//     User.findByPk(req.params.id)
//     .then(user => {
//         if (user.isAdmin){
//             next()
//         }else{
//             res.status(401).send("No autorizado")
//         }
//     })
// }

router.use("/orders", order);
router.get("/", findUsers);
router.get("/:name", findOneUser);
router.put("/:id", editUser);
router.put("/:id/permits", changePermits);
router.delete("/:id", deleteUser);


module.exports = router;
