const express = require("express");
// const model = require("../../models/contact/index");
const {
  getAllContacts,
  getContact,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers");
const {
  addContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
} = require("../../middlewares/index");

const router = express.Router();

router.route("/").get(getAllContacts);
router.route("/:id").get(getContact);
router.route("/").post(addContactValidation, addContact);
router.route("/:id").delete(removeContact);
router.route("/:id").put(updateContactValidation, updateContact);
router
  .route("/:id/favorite")
  .patch(updateContactFavoriteValidation, updateContact);

module.exports = router;
