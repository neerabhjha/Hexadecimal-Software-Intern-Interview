const jwt = require("jsonwebtoken");

const getProtectedRoute = async (req, res) => {
  try {
    // console.log(req.body.userID);
    const data = req.body.userID;
    const PRIVATEKEY = "randomstring";
    const token = jwt.sign(data, PRIVATEKEY);

    res.send({ token });
  } catch (error) {
    console.log(error.message);
    res.send({ error });
  }
};

module.exports = { getProtectedRoute };
