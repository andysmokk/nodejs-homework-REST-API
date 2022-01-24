const User = require("../../models/User");

const updateVerify = async (id, status) => {
  return await User.updateOne(
    { _id: id },
    { verify: status, verificationToken: null }
  );
};

module.exports = updateVerify;
