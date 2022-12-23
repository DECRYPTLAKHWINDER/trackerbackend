const mongoose = require("mongoose");

const validateUsersUpdate = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (!req.body.employeeId || !req.body.name) return false;
  else return true;
};

module.exports = { validateUsersUpdate };
