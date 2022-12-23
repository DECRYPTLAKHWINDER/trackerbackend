const {
  validateUpdate,
  validateUpdatePassword,
} = require("./validateEmployeeUpdate");
const { employees } = require("../../mongoDB/adminModel");

const { decrypt } = require("../cryptography/decryptData");
const { encrypt } = require("../cryptography/encryptData");
const { generatePassword } = require("../cryptography/crypto/generatePassword");

const authenticatePassword = async (req) => {
  const dataValid = await validateUpdatePassword(req);
  if (!dataValid) return [406, "incorrect data in request", ""];

  const user = await employees.findOne({
    employeeId: req.body.employeeId,
  });
  const passwordEncrypt = await encrypt(req.body.newPassword);
  if (user !== null) {
    const status = await decrypt(req.body.currentPassword, user.password);
    if (typeof status == "error") {
      return [500, "error while authenticating password", ""];
    } else if (status == true) {
      await employees.updateOne(
        { employeeId: req.body.employeeId },
        { password: passwordEncrypt }
      );
      console.log(passwordEncrypt);
      console.log(req.body.newPassword);
      console.log("Password Updated");
      return [200, "", "Password Updated"];
    } else {
      console.log("False");
    }
  }
  // return [403, "loginId incorrect", ""];
  // return [200, "", "Password updated"];
  //         console.log(e);
  //     return [500, "Error, Data not Updated", ""];
  //      else {
  //   return [400, statusMessage, ""];
  // }
};

module.exports = { authenticatePassword };
