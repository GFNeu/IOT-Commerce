const router = require('express').Router()
const {editUser, changePermits, deleteUser, findUsers} = require("../controllers/users")
const order = require('./order')

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


router.put("/:id", editUser)
router.put("/:id/permits", changePermits)
router.use("/:id/orders", order)
router.delete("/:id", deleteUser)
router.get("/", findUsers)




module.exports = router