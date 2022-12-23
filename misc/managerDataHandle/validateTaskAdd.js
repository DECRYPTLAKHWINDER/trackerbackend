const mongoose = require("mongoose");

const validateTask = async (req) => {
  if (JSON.stringify(req.body) == "{}") {
    return false;
  } else if (!req.body.taskTitle || !req.body.description || !req.body.deadline)
    return false;
  else return true;
};

module.exports = { validateTask };
