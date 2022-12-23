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
    const teammembers = await employees.find({
      roleId: "636b800c06674b3f78ce3627",
    });
    res.status(200).end(JSON.stringify({ error: "", data: teammembers }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});
router.get("/designation", async (req, res, next) => {
  try {
    const allDesignations = await designations
      .find({ roleId: "636b800c06674b3f78ce3627" })
      .select("designation");
    res.status(200).end(JSON.stringify({ error: "", data: allDesignations }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

module.exports = router;
