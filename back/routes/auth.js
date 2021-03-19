const router = require("express").Router();
const jwt = require("jsonwebtoken");
const loginRoute = require("./auth/login");
const registerRoute = require("./auth/register");
const { sendEmail} = require("../controllers/auth");


router.use("/login", loginRoute);
router.use("/register", registerRoute);

router.post("/me", (req, res) => {
  const token = req.headers.authorization;

  const data = jwt.verify(token, "IOTKEY");

  if (data) {
    res.send(data);
  } else {
    res.sendStatus(401);
  }
});

router.post("/send-email",sendEmail);

module.exports = router;
