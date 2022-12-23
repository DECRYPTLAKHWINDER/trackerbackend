const jwt = require("jsonwebtoken");
const { admins, employees } = require("../mongoDB/adminModel");
const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(req.params);
    const res = await jwt.verify(token, "123");
    next();
  } catch (e) {
    console.log(e);
    res.status(401).end("");
  }
};

module.exports = { checkAuth };
