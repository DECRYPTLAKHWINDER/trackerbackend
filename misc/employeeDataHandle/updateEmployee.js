const {
  validateUpdate,
  validateUpdatePassword,
} = require("./validateEmployeeUpdate");
const { employees } = require("../../mongoDB/adminModel");
const { updateEmployeeAlready } = require("./alreadyEmployee");
const { decrypt } = require("../cryptography/decryptData");
const { encrypt } = require("../cryptography/encryptData");
const { generatePassword } = require("../cryptography/crypto/generatePassword");
const updateEmployee = async (req) => {
  const dataValid = await validateUpdate(req);
  if (!dataValid) return [406, "incorrect data in request", ""];

  const [dataAlready, statusMessage] = await updateEmployeeAlready(req);
  if (dataAlready) {
    try {
      await employees.findOneAndUpdate(
        { employeeId: req.body.employeeId },
        req.body
      );
      return [200, "", "employee Data updated"];
    } catch (e) {
      console.log(e);
      return [500, "Error, Data not Updated", ""];
    }
  } else {
    return [400, statusMessage, ""];
  }
};

module.exports = { updateEmployee };
