const jwt = require("jsonwebtoken");

const getAuthCheck = async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer")) {
    return res.send("Authorization Header Required");
  }
  const token = req.headers.authorization.split(" ")[1];
  const PRIVATEKEY = "randomstring";
  jwt.verify(token, PRIVATEKEY);
  next();
};

module.exports = { getAuthCheck };
