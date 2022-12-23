const { admins, employees } = require("../../mongoDB/adminModel");
const { decrypt } = require("../cryptography/decryptData");
const { encrypt } = require("../cryptography/encryptData");
const bcrypt = require("bcrypt");
const { validateAdminLogin } = require("./validateAdminLogin");
const jwt = require("jsonwebtoken");
const { errorMonitor } = require("nodemailer/lib/xoauth2");
const { default: mongoose } = require("mongoose");

const authenticate = async (req, resp) => {
  const dataValid = await validateAdminLogin(req);
  if (!dataValid) return [406, "incomplete data in request", ""];
  const admin = await employees.findOne({
    roleId: mongoose.Types.ObjectId(req.body.roleId),
    $and: [
      { $or: [{ email: req.body.loginId }, { employeeId: req.body.loginId }] },
    ],
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
        process.env.secretKey,
        { expiresIn: "10m" }
      );

      return [
        200,
        "",
        {
          loggedInBy: admin.name,
          name: req.body.roleName,
          token: jwttoken,
          roleId: admin.employeeId,
        },
      ];
    } else return [403, "password incorrect", ""];
  } else return [403, "loginId incorrect", ""];
};

module.exports = { authenticate };
