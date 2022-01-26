const authService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");
const { EmailService, Sender } = require("../../service/email");
const CustomError = require("../../lib/customError");

// const authService = new AuthService();

const signup = async (req, res, next) => {
  const { email } = req.body;
  const isUserExist = await authService.isUserExist(email);
  if (isUserExist) {
    throw new CustomError(httpCode.CONFLICT, "Email in use");
    // return res.status(httpCode.CONFLICT).json({
    //   status: "error",
    //   code: httpCode.CONFLICT,
    //   message: "Email in use",
    // });
  }

  const userData = await authService.createUser(req.body);
  const emailService = new EmailService(process.env.NODE_ENV, new Sender());

  // const { name, verificationToken } = userData;

  const isSend = await emailService.sendVerifyEmail(
    userData.email,
    userData.verificationToken
  );

  delete userData.verificationToken;

  res.status(httpCode.CREATED).json({
    status: "successful",
    code: httpCode.CREATED,
    data: { ...userData, isSendVerifyEmail: isSend },
  });
};

module.exports = signup;
