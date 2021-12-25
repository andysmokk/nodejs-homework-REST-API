const models = require("../../models/contact");

const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const updatedContact = await models.updateContact(id, req.body);
  if (updatedContact) {
    return res.status(200).json(updatedContact);
  }
  res.status(404).json({ message: "Contact not found" });
};

module.exports = updateContact;
