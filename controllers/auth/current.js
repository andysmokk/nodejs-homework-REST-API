const authService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

// const authService = new AuthService();

const current = async (req, res) => {
  const { email } = req.body;
  const user = await authService.currentUser(email);
  if (!user) {
    throw new CustomError(httpCode.UNAUTHORIZED, "Not authorized");
    // res.status(httpCode.UNAUTHORIZED).json({
    //   status: "error",
    //   code: httpCode.UNAUTHORIZED,
    //   message: "Not authorized",
    // });
  }

  res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: user,
  });
};

module.exports = current;
