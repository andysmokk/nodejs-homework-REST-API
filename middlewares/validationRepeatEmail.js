const Joi = require("joi");
const httpCode = require("../lib/httpCodes");

const validationRepeatEmail = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res.status(httpCode.BAD_REQUEST).json({
      status: "error",
      code: httpCode.BAD_REQUEST,
      data: { message: "Missing required field email" },
    });
  }
  next();
};

module.exports = validationRepeatEmail;
