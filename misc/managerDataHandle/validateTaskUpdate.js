const mongoose = require("mongoose");

const validateUpdate = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (
    !req.body.title ||
    !req.body.description ||
    !req.body.deadline ||
    !req.body.employeeId
  )
    return false;
  else return true;
};

module.exports = { validateUpdate };
