const bcrypt = require("bcrypt");

const encrypt = async (plainData) => {
  const salt = await bcrypt.genSalt(10);
  const hashedData = await bcrypt.hash(plainData, salt);
  return hashedData;
};

module.exports = { encrypt };
