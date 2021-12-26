const Contact = require("../../models/Contact");

const addContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    return res.status(201).json({
      message: "ok",
      code: 201,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400,
    });
  }
};

module.exports = addContact;
