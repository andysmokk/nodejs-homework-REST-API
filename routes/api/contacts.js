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
} = require("../../middlewares");

const router = express.Router();

router.route("/").get(guard, getAllContacts);
router.route("/:id").get(guard, getContact);
router.route("/").post(guard, addContactValidation, addContact);
router.route("/:id").delete(guard, removeContact);
router.route("/:id").put(guard, updateContactValidation, updateContact);
router
  .route("/:id/favorite")
  .patch(updateContactFavoriteValidation, idValidation, updateContact);

module.exports = router;
