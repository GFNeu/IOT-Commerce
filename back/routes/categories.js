const router = require('express').Router()
const {allCategories, oneCategory, createCategory, changeCategory, deleteCategory}= require("../controllers/categories")

router.get("/", allCategories)
router.get("/:id", oneCategory)

//FUNCIONES PARA ADMIN
router.post("/", createCategory)
router.put("/:id", changeCategory)
router.delete("/:id", deleteCategory)

module.exports = router