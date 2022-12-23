const mongoose = require("./mongoConnect");
const tasksSchema = mongoose.Schema({
  title: String,
  description: String,
  deadline: String,
  employeeId: String,
});

const assignTasksSchema = mongoose.Schema({
  titleId: mongoose.Types.ObjectId,
  assignTo: String,
  assignFrom: String,
});

const tasks = mongoose.model("tasks", tasksSchema);
const assigntasks = mongoose.model("assigntasks", assignTasksSchema);
module.exports = { tasks, assigntasks };
