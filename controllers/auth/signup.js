const authService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");

// const authService = new AuthService();

const signup = async (req, res, next) => {
  try {
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
    res.status(httpCode.CREATED).json({
      status: "successful",
      code: httpCode.CREATED,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
