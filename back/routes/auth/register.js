const express = require("express");
const router = express.Router();
const { User } = require("../../models/Index");

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
      })
      .catch((err) => console.log(err));
    }

    
  });
});

module.exports = router;
