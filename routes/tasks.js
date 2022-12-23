const express = require("express");
const router = express.Router();
const { tasks } = require("../mongoDB/managerModel");
const { addTask } = require("../misc/managerDataHandle/addtasks");
const { updateTask } = require("../misc/managerDataHandle/updateTask");

router.get("/", async (req, res, next) => {
  try {
    const allTasks = await tasks.find();
    res.status(200).end(JSON.stringify({ error: "", data: allTasks }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

router.post("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await addTask(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.put("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await updateTask(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});
module.exports = router;
