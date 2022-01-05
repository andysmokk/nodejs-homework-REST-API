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

module.exports = {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
  guard,
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
};
