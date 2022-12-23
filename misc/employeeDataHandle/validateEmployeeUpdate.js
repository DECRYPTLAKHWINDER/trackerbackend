const mongoose = require("mongoose");

const validateUpdate = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (
    !req.body.employeeId ||
    !req.body.name ||
    !req.body.email ||
    !req.body.roleId ||
    !req.body.designationId ||
    !req.body.roleName ||
    !req.body.designationName
  )
    return false;
  else if (req.body.roleId == "636b800c06674b3f78ce3627") {
    if (!req.body.reportingManagerId || !req.body.reportingManagerName)
      return false;
    else return true;
  } else if (req.body.roleId == "636b805a06674b3f78ce3628") {
    if (req.body.reportingManagerId || req.body.reportingManagerName)
      return false;
    else {
      req.body.reportingManagerId = undefined;
      req.body.reportingManagerName = undefined;
      return true;
    }
  } else return false;
};

const validateUpdatePassword = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (
    !req.body.employeeId ||
    !req.body.currentPassword ||
    !req.body.newPassword
  )
    return false;
  else return true;
};
module.exports = { validateUpdate, validateUpdatePassword };
