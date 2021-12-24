const db = require("../db");
const { getCollection } = require("./getCollection");

const removeContact = async (contactId) => {
  const collection = await getCollection(db, "contacts");
  const { value: result } = await collection.findOneAndDelete(contactId);
  return result;
};

module.exports = {
  removeContact,
};
