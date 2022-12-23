const { validateUpdate } = require("./validateTaskUpdate");
const { tasks, assigntasks } = require("../../mongoDB/managerModel");
const { updateTaskAlready } = require("./alreadyTaskAssign");
const updateTask = async (req) => {
  const dataValid = await validateUpdate(req);
  if (!dataValid) return [406, "incorrect data in request", ""];

  const [dataAlready, statusMessage] = await updateTaskAlready(req);
  if (dataAlready) {
    try {
      await tasks.findOneAndUpdate({ _id: req.body.taskId }, req.body);
      await assigntasks.findOneAndUpdate(
        { assignFrom: req.body.employeeId },
        req.body
      );
      return [200, "", "Task Updated"];
    } catch (e) {
      console.log(e);
      return [500, "Error, Data not Updated", ""];
    }
  } else {
    return [400, statusMessage, ""];
  }
};

module.exports = { updateTask };
