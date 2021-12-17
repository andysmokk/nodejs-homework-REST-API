// const fs = require("fs/promises");
// const path = require("path");
const contacts = require("./contacts.json");

// const contactsPath = path.resolve("./model/contacts.json");
// console.log(contactsPath);

// const readContent = async () => {
//   const content = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(content);
//   return contacts;
// };

const listContacts = async () => {
  return contacts;
};

const getContactById = async (contactId) => {
  const [contact] = contacts.filter((contact) => contact.id === contactId);
  return contact;
};

const addContact = async (body) => {};

const removeContact = async (contactId) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
