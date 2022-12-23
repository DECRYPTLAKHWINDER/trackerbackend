const mongoose = require("./mongoConnect");
const adminSchema = mongoose.Schema({
  user: String,
  email: String,
  password: String,
});
const roleSchema = mongoose.Schema({
  role: String,
});
const reportingAuthoritiesSchema = mongoose.Schema({
  roleId: mongoose.Types.ObjectId,
  name: String,
});
const employeeSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  employeeId: { type: String, unique: true },
  roleId: mongoose.Types.ObjectId,
  roleName: String,
  reportingManagerId: String,
  reportingManagerName: String,
  designationId: mongoose.Types.ObjectId,
  designationName: String,
  createdOn: { type: Date, default: Date.now },
});
const designationSchema = mongoose.Schema({
  designation: String,
  roleId: mongoose.Types.ObjectId,
});

const admins = mongoose.model("admins", adminSchema);
const reportingAuthorities = mongoose.model(
  "reportingAuthorities",
  reportingAuthoritiesSchema
);
const employees = mongoose.model("employees", employeeSchema);
const designations = mongoose.model("designations", designationSchema);
const roles = mongoose.model("roles", roleSchema);

module.exports = {
  admins,
  reportingAuthorities,
  employees,
  designations,
  roles,
};
