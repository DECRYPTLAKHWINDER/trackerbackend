const mongoose = require("mongoose");

const validateAssignTask = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (
    !req.body.taskTitle ||
    !req.body.description ||
    !req.body.deadline ||
    !req.body.EmployeeId ||
    !req.body.taskTitleId ||
    !req.body.assignFrom
  )
    return false;
  else return true;
};

module.exports = { validateAssignTask };
