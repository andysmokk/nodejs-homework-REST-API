const db = require("../db");

const listContacts = async () => {
  const client = await db;
  const collection = await client.db().collection("contacts");
  const result = await collection.find().toArray();
  return result;
};

module.exports = {
  listContacts,
};
