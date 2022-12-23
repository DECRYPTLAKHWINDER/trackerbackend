const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");

const {
  roles,
  admins,
  designations,
  employees,
} = require("../mongoDB/adminModel");
const { addEmployee } = require("../misc/employeeDataHandle/addEmployee");
const { updateEmployee } = require("../misc/employeeDataHandle/updateEmployee");
const {
  authenticatePassword,
} = require("../misc/employeeDataHandle/updateEmployeePassword");
const { removeEmployee } = require("../misc/employeeDataHandle/deleteEmployee");
const {
  authenticate,
} = require("../misc/employeeDataHandle/authenticateEmployee");
const {
  updateUserProfile,
} = require("../misc/employeeDataHandle/updateUserProfile");
router.get("/", async (req, res, next) => {
  try {
    const allEmployees = await employees.find();
    res.status(200).end(JSON.stringify({ error: "", data: allEmployees }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

router.post("/login", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await authenticate(req);
  const jwttoken = jwt.sign(
    {
      user: req.body.loginId,
      password: req.body.password,
    },
    "123"
  );
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: { token: jwttoken } }));
});

router.post("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await addEmployee(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.put("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await updateEmployee(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.put("/userprofileupdate", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await updateUserProfile(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.post("/updatepassword", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await authenticatePassword(
    req
  );
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.delete("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await removeEmployee(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

module.exports = router;
