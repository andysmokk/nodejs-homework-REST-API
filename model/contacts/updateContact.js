const db = require("../db");
const ObjectId = require("mongodb").ObjectId;
const { getCollection } = require("./getCollection");

const updateContact = async (contactId, body) => {
  const collection = await getCollection(db, "contacts");
  const id = ObjectId(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: id },
    { $set: body }
  );
  return result;
};

module.exports = {
  updateContact,
};
