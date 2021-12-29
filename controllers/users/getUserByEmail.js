const User = require("../../models/User");

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = getUserByEmail;
