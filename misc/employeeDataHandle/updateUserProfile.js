const { validateUsersUpdate } = require("./validateUserProfileUpdate");
const { employees } = require("../../mongoDB/adminModel");
const { updateEmployeeAlready } = require("./alreadyEmployee");
const { decrypt } = require("../cryptography/decryptData");
const { encrypt } = require("../cryptography/encryptData");
const { generatePassword } = require("../cryptography/crypto/generatePassword");
const updateUserProfile = async (req) => {
  const dataValid = await validateUsersUpdate(req);
  if (!dataValid) return [406, "incorrect data in request", ""];

  try {
    await employees.updateOne(
      { employeeId: req.body.employeeId },
      { name: req.body.name }
    );
    return [200, "", "user details updated"];
  } catch (e) {
    console.log(e);
    return [500, "Error, Data not Updated", ""];
  }
};

module.exports = { updateUserProfile };
