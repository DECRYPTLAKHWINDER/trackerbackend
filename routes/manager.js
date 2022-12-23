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

router.get("/", async (req, res, next) => {
  try {
    const managers = await employees
      .find({ roleId: "636b805a06674b3f78ce3628" })
      .select("name")
      .select("employeeId");
    res.status(200).end(JSON.stringify({ error: "", data: managers }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

router.get("/designation", async (req, res, next) => {
  try {
    const allDesignations = await designations
      .find({ roleId: "636b805a06674b3f78ce3628" })
      .select("designation");
    res.status(200).end(JSON.stringify({ error: "", data: allDesignations }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

module.exports = router;
