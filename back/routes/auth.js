const router = require("express").Router();

const loginRoute = require("./auth/login");
const registerRoute = require("./auth/register");
const private1Route = require("./auth/private1");

router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/private1", private1Route);

module.exports = router;
