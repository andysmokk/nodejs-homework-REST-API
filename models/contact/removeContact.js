// const db = require("../../config/db");
// const ObjectId = require("mongodb").ObjectId;
// const { getCollection } = require("./getCollection");

// const removeContact = async (contactId) => {
//   const collection = await getCollection(db, "contacts");
//   const id = ObjectId(contactId);
//   const { value: result } = await collection.findOneAndDelete({ _id: id });
//   return result;
// };

// module.exports = {
//   removeContact,
// };
