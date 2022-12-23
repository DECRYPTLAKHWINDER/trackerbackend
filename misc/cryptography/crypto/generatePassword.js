const crypto = require("crypto");
const generatePassword = async () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789@$";
  let password = "";
  for (let x = 0; x < 8; x++) {
    password = password + characters[crypto.randomInt(characters.length)];
  }
  return password;
};
module.exports = { generatePassword };
// !@#$%^&*?
