const { tasks } = require("../../mongoDB/managerModel");

const removeTask = async (req) => {
  try {
    await tasks.findOneAndDelete({ employeeId: req.body.employeeId });
    return [200, "", "Task successfully deleted "];
  } catch (e) {
    console.log(e);
    return [500, "Error occured while deleting Task", ""];
  }
};

module.exports = { removeTask };
