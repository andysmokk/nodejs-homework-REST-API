const models = require("../../models/contact");

const addContact = async (req, res, next) => {
  const newContact = await models.addContact(req.body);
  return res.status(201).json(newContact);
};

module.exports = addContact;
