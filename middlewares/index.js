const {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
} = require("./validationMiddleware");
const guard = require("./guard");

module.exports = {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
  guard,
};
