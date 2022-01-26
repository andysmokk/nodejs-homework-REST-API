const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");
const { EmailService, Sender } = require("../../service/email");

const repeatEmailForVerifyUser = async (req, res, next) => {
  const { email } = req.body;

  // валидация сделана через мидлвар
  // if (!email) {
  //   return res.status(httpCode.NOT_FOUND).json({
  //     status: "error",
  //     code: httpCode.NOT_FOUND,
  //     data: { message: "Missing required field email" },
  //   });
  // }

  const user = await User.findOne({ email });
  if (user) {
    const { email, verify, verificationToken } = user;

    if (verify) {
      return res.status(httpCode.BAD_REQUEST).json({
        status: "error",
        code: httpCode.BAD_REQUEST,
        data: { message: "Verification has already been passed" },
      });
    }

    const emailService = new EmailService(process.env.NODE_ENV, new Sender());

    const isSend = await emailService.sendVerifyEmail(email, verificationToken);

    if (isSend) {
      return res.status(httpCode.OK).json({
        status: "successful",
        code: httpCode.OK,
        data: { message: "Verification email sent" },
      });
    }

    return res.status(httpCode.SE).json({
      status: "error",
      code: httpCode.SE,
      data: { message: "Service Unavailable" },
    });
  }

  res.status(httpCode.NOT_FOUND).json({
    status: "error",
    code: httpCode.NOT_FOUND,
    data: { message: "User with email not found" },
  });
};

module.exports = repeatEmailForVerifyUser;
