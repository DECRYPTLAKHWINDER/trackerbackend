const express = require("express");
const router = express.Router();
const {
  roles,
  admins,
  designations,
  employees,
} = require("../mongoDB/adminModel");

router.post("/", async (req, res, next) => {
  try {
    const allEmployees = await employees.find({
      roleName: "Team Member",
      reportingManagerId: req.body.reportingManagerId,
    });
    // aggregate is use for table to table getting a data

    // const allEmployees = await employees.aggregate([
    //   {
    //     $match: {
    //       roleName: "Team Member",
    //       reportingManagerId: req.body.userID,
    //     },
    //   },
    // ]);
    res.status(200).end(
      JSON.stringify({
        error: "",
        data: allEmployees,
      })
    );
  } catch (e) {
    res
      .status(419)
      .end(JSON.stringify({ error: "unable to get data", data: "" }));
  }
});

module.exports = router;
