// const mongoose = require('./mongoDB/index')
// const {roles,admins,designations,employees}=require('./mongoDB/adminModel')
// const { addDesignation } = require('./misc/otherData/addMember');
// const { addAdmin } = require('./misc/adminDataHandle/addAdmin');
// const { addEmployee } = require('./misc/employeeDataHandle/addEmployee');
// const {authenticate}=require('./misc/adminDataHandle/authenticateAdmin')
// const {updateEmployee}=require('./misc/employeeDataHandle/updateEmployee')
// const {updateAdmin}=require('./misc/adminDataHandle/updateAdmin')
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
// const { sendEmail } = require('./misc/mailer/registeredData');
// const { jk } = require('./misc/employeeDataHandle/gh');
// const {gp}=require('./misc/cryptography/crypto/generatePassword');
// const { removeEmployee } = require('./misc/employeeDataHandle/deleteEmployee');
const app = express();

const admin = require("./routes/admin");
const designation = require("./routes/designation");
const employee = require("./routes/employee");
const manager = require("./routes/manager");
const role = require("./routes/role");
const teammember = require("./routes/teammember");
const myteammember = require("./routes/myteammember");
const tasks = require("./routes/tasks");
const assignTasks = require("./routes/assigntask");

app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/admin", admin);
app.use("/designation", designation);
app.use("/employee", employee);
app.use("/manager", manager);
app.use("/role", role);
app.use("/teammember", teammember);
app.use("/myteammember", myteammember);
app.use("/tasks", tasks);
app.use("/assigntasks", assignTasks);

app.listen(3012);

module.exports = app;
