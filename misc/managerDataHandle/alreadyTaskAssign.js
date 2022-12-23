const { assigntasks } = require("../../mongoDB/managerModel");
const { tasks } = require("../../mongoDB/managerModel");
const taskAlreadyAssign = async (req) => {
  let already = await assigntasks.find({ _id: req.body.taskId });
  if (already.length === 0) {
    already = await assigntasks.find({ title: req.body.title });
    if (already.length === 0) {
      return [true, "proceed"];
    } else return [false, "Task already taken"];
  } else return [false, "taskId already taken"];
};

const updateTaskAlready = async (req) => {
  let already = await tasks.find({ _id: req.body.taskId });
  if (already.length !== 0) {
    return [true, "proceed"];
  } else return [false, "Task Id not present"];
};

module.exports = { taskAlreadyAssign, updateTaskAlready };
