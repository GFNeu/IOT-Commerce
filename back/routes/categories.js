const router = require('express').Router()
const {allCategories, oneCategory, createCategory, changeCategory, deleteCategory, findOneCategory, fromCategory, toCategory }= require("../controllers/categories")
const isAdmin= require("./adminMW")


router.delete("/admin/:userAdmin/:categoryId/:productId", isAdmin, fromCategory)
router.post("/admin/:userAdmin/insert", isAdmin, toCategory)
router.get("/admin/:name", findOneCategory)
router.get("/:id", oneCategory)
router.post("/admin/:userAdmin", isAdmin, createCategory)
router.put("/admin/:userAdmin/:id", isAdmin, changeCategory)
router.delete("/admin/:userAdmin/:id", isAdmin, deleteCategory)
router.get("/", allCategories)

module.exports = router