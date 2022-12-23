const bcrypt = require("bcrypt");
const saltRounds = 10;

const decrypt = async (plain, hashed) => {
  const status = await bcrypt.compare(plain, hashed);
  return status;
};

module.exports = { decrypt };
