const { admins } = require("../../mongoDB/adminModel");
const { decrypt } = require("../cryptography/decryptData");
const jwt = require("jsonwebtoken");

const authenticate = async (req, resp) => {
  const admin = await admins.findOne({
    $or: [{ email: req.body.loginId }, { employeeId: req.body.loginId }],
  });

  if (admin !== null) {
    const status = await decrypt(req.body.password, admin.password);
    if (typeof status == "error")
      return [500, "error while authenticating password", ""];
    else if (status == true) {
      const jwttoken = jwt.sign(
        {
          user: req.body.loginId,
          password: req.body.password,
        },
        "123"
      );
      return [200, "", { token: jwttoken }];
    } else return [403, "password incorrect", ""];
  } else return [403, "loginId incorrect", ""];
};

module.exports = { authenticate };
