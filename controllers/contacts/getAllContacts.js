const models = require("../../models/contact");

const getAllContacts = async (req, res, next) => {
  const contacts = await models.listContacts();
  res.status(200).json(contacts);
};

module.exports = getAllContacts;
