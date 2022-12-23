const { validateTask } = require("./validateTaskAdd");
const { tasks } = require("../../mongoDB/managerModel");

const addTask = async (req) => {
  const dataValid = await validateTask(req);
  if (!dataValid) return [406, "incomplete data in request", ""];
  let newTask;
  newTask = new tasks({
    title: req.body.taskTitle,
    description: req.body.description,
    deadline: req.body.deadline,
    employeeId: req.body.employeeId,
  });
  console.log(newTask);
  try {
    await newTask.save();
    // await sendEmail(pswd,newEmployee)
    return [200, "", "data saved"];
  } catch (e) {
    console.log(e);
    return [500, "data not saved Try again", ""];
  }
};
module.exports = { addTask };
