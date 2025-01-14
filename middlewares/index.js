const {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
} = require("./validationContact");
const {
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
} = require("./validationUser");
const guard = require("./guard");
const upload = require("./upload");
const validationRepeatEmail = require("./validationRepeatEmail");
const errorHandler = require("./errorHandler");

module.exports = {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
  guard,
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
  upload,
  validationRepeatEmail,
  errorHandler,
};
