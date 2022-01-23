const getUserByVerifyToken = require("./getUserByVerifyToken");
const updateVerify = require("./updateVerify");

const httpCode = require("../../lib/httpCodes");

const verifyUser = async (req, res, next) => {
  const verifyToken = req.params.verificationToken;

  const userFromToken = await getUserByVerifyToken(verifyToken);

  if (userFromToken) {
    await updateVerify(userFromToken.id, true);
    return res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      data: { message: "Verification successful" },
    });
  }

  res.status(httpCode.NOT_FOUND).json({
    status: "error",
    code: httpCode.NOT_FOUND,
    data: { message: "User not found" },
  });
};

module.exports = verifyUser;
