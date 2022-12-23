const { employees, admins, designations } = require("../../mongoDB/adminModel");
const jk = async () => {
  const ab = await employees.aggregate([
    {
      $lookup: {
        from: "designations",
        localField: "designationId",
        foreignField: "_id",
        as: "designations",
      },
    },
    {
      $project: {
        name: 1,
        "designations.designation": 1,
      },
    },
  ]);
  console.log(ab[0]);
};
module.exports = { jk };
