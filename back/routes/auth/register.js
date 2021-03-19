const express = require("express");
const router = express.Router();
const { User } = require("../../models/Index");
const { sendEmail} = require("../../controllers/auth");


router.post("/", (req, res, next) => {
  const body = req.body;

  User.findOne({
    where: {
      email: body.email,
    },
  }).then((usuario) => {
    if (usuario) {
      res.status(400).send("These user already exist");
    }else{
      User.create(body)
      .then((user) => {
        res.status(200).send(user);
        sendEmail("IOT Commerce", user.email , "Registro exitoso","",`<h1>Eres un nuevo usuario registrado <br> Gracias ${user.name}</h1>`)
       })
       .catch((err) => console.log(err));
    }

    
  });
});

module.exports = router;
