const Joi = require("joi");

const addContactValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const updateContactValidation = Joi.object({
  name: Joi.string().optional(),
  username: Joi.string().email().optional(),
  phone: Joi.string().optional(),
}).or("name", "email", "phone");
