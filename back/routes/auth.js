const router = require("express").Router();

const loginRoute = require("./auth/login");
const registerRoute = require("./auth/register");


router.use("/login", loginRoute);
router.use("/register", registerRoute);


module.exports = router;
