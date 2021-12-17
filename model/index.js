const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
// const contacts = require("./contacts.json");

const contactsPath = path.resolve("./model/contacts.json");
// console.log(contactsPath);

const readContent = async () => {
  const content = await fs.readFile(contactsPath);
  const contacts = JSON.parse(content);
  return contacts;
};

const listContacts = async () => {
  return await readContent();
};

const getContactById = async (contactId) => {
  const contacts = await await readContent();
  const [contact] = contacts.filter((contact) => contact.id === contactId);
  return contact;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await readContent();
  const newContact = { name, email, phone, id: crypto.randomUUID() };

  // eslint-disable-next-line array-callback-return
  const existingContact = contacts.find((contact) => {
    if (contact.name === name) {
      return contact;
    }
  });

  if (existingContact?.email === newContact.email) {
    console.log(
      `Contact with this email: ${newContact.email} already exists`.bgRed
    );
    return;
  }

  if (existingContact?.phone === newContact.phone) {
    console.log(
      `Contact with this phone: ${newContact.phone} already exists`.bgRed
    );
    return;
  }

  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await readContent();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex !== -1) {
    const [removedContact] = contacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  }

  return null;
};

const updateContact = async (contactId, body) => {
  const contacts = await readContent();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex !== -1) {
    const updatedContact = {
      id: contactId,
      ...contacts[contactIndex],
      ...body,
    };
    contacts[contactIndex] = updatedContact;
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return updatedContact;
  }
  return null;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
