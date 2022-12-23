const express = require("express");
const router = express.Router();
const { assigntasks } = require("../mongoDB/managerModel");
const { assignTaskTo } = require("../misc/managerDataHandle/assigntask");

router.get("/", async (req, res, next) => {
  try {
    const allAssignTasks = await assigntasks.find();
    res.status(200).end(JSON.stringify({ error: "", data: allAssignTasks }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

router.post("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await assignTaskTo(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});
module.exports = router;
