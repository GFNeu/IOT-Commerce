const express = require("express");
const router = express.Router();
const tokenMiddleware = require(" ");

router.post("/private", tokenMiddleware, (req, res, next) => {
  res.send("ruta privada");
});

module.exports = router;
