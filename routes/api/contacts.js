const express = require("express");
const model = require("../../model/index");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await model.listContacts();
  res.status(200).json(contacts);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const contactById = await model.getContactById(id);
  if (contactById) {
    return res.status(200).json(contactById);
  }
  res.status(404).json({ message: "Contact not found" });
});

router.post("/", async (req, res, next) => {
  const newContact = await model.addContact(req.body);
  return res.status(201).json(newContact);
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const removedContact = await model.removeContact(id);
  console.log(removedContact);
  if (removedContact) {
    return res.status(200).json({ message: "Contact deleted" });
  }
  res.status(404).json({ message: "Contact Not found" });
});

router.patch("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
