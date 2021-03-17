const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "IOTKEY", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    
    next();
  });
};

 module.exports = checkJWT    