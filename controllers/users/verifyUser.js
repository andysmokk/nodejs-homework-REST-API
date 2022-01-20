const {
  getUserByVerifyToken,
  updateVerify,
} = require("../../controllers/users");
const httpCode = require("../../lib/httpCodes");

const verifyUser = async (req, res, next) => {
  const verifyToken = req.params.token;
  const userFromToken = getUserByVerifyToken(verifyToken);

  if (userFromToken) {
    await updateVerify(userFromToken.id, true);
    res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      data: { message: "Success" },
    });
  }

  res.status(httpCode.BAD_REQUEST).json({
    status: "successful",
    code: httpCode.BAD_REQUEST,
    data: { message: "Invalid token" },
  });
};

module.exports = verifyUser;
