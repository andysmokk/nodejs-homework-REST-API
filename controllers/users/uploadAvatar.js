// const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");

const uploadAvatar = async (req, res) => {
  return res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
  });
};

module.exports = uploadAvatar;
