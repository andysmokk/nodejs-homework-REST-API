const models = require("../../models/contact");

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const removedContact = await models.removeContact(id);
  if (removedContact) {
    return res.status(200).json({ removedContact });
  }
  res.status(404).json({ message: "Contact Not found" });
};

module.exports = removeContact;
