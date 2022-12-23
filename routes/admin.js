const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");

const { admins } = require("../mongoDB/adminModel");
const { authenticate } = require("../misc/adminDataHandle/authenticateLogin");
const { addAdmin } = require("../misc/adminDataHandle/addAdmin");
const { updateAdmin } = require("../misc/adminDataHandle/updateAdmin");

router.get("/", checkAuth, async (req, res, next) => {
  try {
    const admin = await admins.find().select("user");
    res.status(200).end(JSON.stringify({ error: "", data: admin }));
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

router.post("/login", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await authenticate(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.post("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await addAdmin(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

router.put("/", async (req, res, next) => {
  const [statusCode, errorMesssage, dataMessage] = await updateAdmin(req);
  res
    .status(statusCode)
    .end(JSON.stringify({ error: errorMesssage, data: dataMessage }));
});

module.exports = router;
