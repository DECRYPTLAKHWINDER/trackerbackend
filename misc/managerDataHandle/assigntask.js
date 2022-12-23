const { validateAssignTask } = require("./validateAssignTask");
const { assigntasks } = require("../../mongoDB/managerModel");

const assignTaskTo = async (req) => {
  const dataValid = await validateAssignTask(req);
  if (!dataValid) return [406, "incomplete data in request", ""];
  let newAssignTask;
  newAssignTask = new assigntasks({
    titleId: req.body.taskTitleId,
    assignTo: req.body.EmployeeId,
    assignFrom: req.body.assignFrom,
  });
  console.log(newAssignTask);
  try {
    await newAssignTask.save();
    // await sendEmail(pswd,newEmployee)
    return [200, "", "data saved"];
  } catch (e) {
    console.log(e);
    return [500, "data not saved Try again", ""];
  }
};
module.exports = { assignTaskTo };
