const db = require("../db");
const ObjectId = require("mongodb").ObjectId;
const { getCollection } = require("./getCollection");

const getContactById = async (contactId) => {
  const collection = await getCollection(db, "contacts");
  const id = ObjectId(contactId);
  const result = await collection.find({ _id: id }).toArray();
  return result;
};

module.exports = {
  getContactById,
};
