const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");
const { EmailService, Sender } = require("../../service/email");

const repeatEmailForVerifyUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const { email, verificationToken } = user;
    const emailService = new EmailService(process.env.NODE_ENV, new Sender());

    // const { name, verificationToken } = userData;

    const isSend = await emailService.sendVerifyEmail(email, verificationToken);
    if (isSend) {
      return res.status(httpCode.OK).json({
        status: "successful",
        code: httpCode.OK,
        data: { message: "Success" },
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
