const express = require("express");
const {
  getAllContacts,
  getContact,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers/contacts");

const {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  idValidation,
  guard,
  errorHandler,
} = require("../../middlewares");

const router = express.Router();

router.route("/").get(errorHandler(guard), errorHandler(getAllContacts));
router.route("/:id").get(errorHandler(guard), errorHandler(getContact));
router
  .route("/")
  .post(errorHandler(guard), addContactValidation, errorHandler(addContact));
router.route("/:id").delete(errorHandler(guard), errorHandler(removeContact));
router
  .route("/:id")
  .put(
    errorHandler(guard),
    updateContactValidation,
    errorHandler(updateContact)
  );
router
  .route("/:id/favorite")
  .patch(
    updateContactFavoriteValidation,
    idValidation,
    errorHandler(updateContact)
  );

module.exports = router;
