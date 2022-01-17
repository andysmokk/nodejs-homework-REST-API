const Joi = require("joi");
const httpCode = require("../lib/httpCodes");

const createUserValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(9).max(30).required(),
  });
  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message.replace(/"/g, "") });
  }
  next();
};

const loginUserValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(9).max(30).required(),
  });
  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message.replace(/"/g, "") });
  }
  next();
};

const subscriptionUserValidation = async (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string().required(),
  });
  try {
    await schema.validateAsync(req.body);
  } catch (error) {
    return res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message.replace(/"/g, "") });
  }
  next();
};

module.exports = {
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
};
