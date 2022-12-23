const { validateAdd } = require("./validateEmployeeAdd");
const { employees } = require("../../mongoDB/adminModel");
const { employeeAlready } = require("./alreadyEmployee");
const { encrypt } = require("../cryptography/encryptData");
const { getId } = require("./employeeId");
const { sendEmail } = require("../mailer/registeredData.js");
const { generatePassword } = require("../cryptography/crypto/generatePassword");

const addEmployee = async (req) => {
  const dataValid = await validateAdd(req);
  if (!dataValid) return [406, "incomplete data in request", ""];

  const [dataAlready, statusMessage] = await employeeAlready(req);
  if (dataAlready) {
    const pswd = await generatePassword();
    let newEmployee;
    if (req.body.reportingManagerId != "") {
      newEmployee = new employees({
        name: req.body.name,
        email: req.body.email,
        password: await encrypt(pswd),
        roleId: req.body.roleId,
        roleName: req.body.roleName,
        reportingManagerId: req.body.reportingManagerId,
        designationName: req.body.designationName,
        reportingManagerName: req.body.reportingManagerName,
        employeeId: await getId(),
        designationId: req.body.designationId,
      });
    }
    else {
      newEmployee = new employees({
        name: req.body.name,
        email: req.body.email,
        password: await encrypt(pswd),
        roleId: req.body.roleId,
        roleName: req.body.roleName,
        designationName: req.body.designationName,
        employeeId: await getId(),
        designationId: req.body.designationId,
        reportingManagerId: undefined,
        reportingManagerName: undefined,
      });
    }
    // showPassword of auto Generated
    console.log(pswd);
    try {
      await newEmployee.save();
      await sendEmail(pswd,newEmployee)
      return [200, "", "data saved"];
    } catch (e) {
      console.log(e);
      return [500, "data not saved Try again", ""];
    }
  } else {
    return [400, statusMessage, ""];
  }
};

module.exports = { addEmployee };
