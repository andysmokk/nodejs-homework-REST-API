const User = require("../../models/User");

const getUserByVerifyToken = async (verificationToken) => {
  return await User.findOne({ verificationToken });
};

module.exports = getUserByVerifyToken;
