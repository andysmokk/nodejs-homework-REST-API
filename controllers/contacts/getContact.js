const models = require("../../models/contact");

const getContact = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await models.getContactById(id);
  if (contactById) {
    return res.status(200).json(contactById);
  }
  res.status(404).json({ message: "Contact not found" });
};

module.exports = getContact;
