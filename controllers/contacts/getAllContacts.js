const Contact = require("../../models/Contact");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json({
      message: "ok",
      code: 200,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400,
    });
  }
};

module.exports = getAllContacts;
