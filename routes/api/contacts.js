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
} = require("../../middlewares/index");

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContact);
router.post("/", addContactValidation, addContact);
router.delete("/:id", removeContact);
router.put("/:id", updateContactValidation, updateContact);

module.exports = router;
