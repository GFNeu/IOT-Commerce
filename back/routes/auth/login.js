const express = require("express");
const router = express.Router();
const {User} = require("../../models/Index")
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email,
    },
  })
    .then((usuario) => {
      if (!usuario) res.status(400).send("ingrese un email válido");
      if (!usuario.validatePassword(password))
        res.status(401).send("contraseña incorrecta");
      jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          name: usuario.name,
          lastName: usuario.lastName,
          isAdmin: usuario.isAdmin
          
        },"IOTKEY",(err, token) => {
          res.json({token:token, usuario:usuario});
        }
      );
    })
    .catch(next);
});

module.exports = router;
