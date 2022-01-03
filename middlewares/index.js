const {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
} = require("./validationContact");
const {
  createUserValidation,
  loginUserValidation,
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
};
