const AuthService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");

const authService = new AuthService();

const signup = async (req, res, next) => {
  const { email } = req.body;
  const isUserExist = await authService.isUserExist(email);
  if (isUserExist) {
    return res.status(httpCode.CONFLICT).json({
      status: "error",
      code: httpCode.CONFLICT,
      message: "Email in use",
    });
  }

  const data = await authService.createUser(req.body);
  res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data,
  });
};

module.exports = signup;
