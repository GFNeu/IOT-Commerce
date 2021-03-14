const router = require('express').Router()
const {allCategories}= require("../controllers/categories")

router.get("/", allCategories)


module.exports = router