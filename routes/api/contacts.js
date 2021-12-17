const express = require("express");
const model = require("../../model/index");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await model.listContacts();
  res.json(contacts);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const contactById = await model.getContactById(id);
  res.json(contactById);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
