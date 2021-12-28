const Contact = require("../../models/Contact");

const removeContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(400).json({
        message: `Cannot remove contact with id: ${id}`,
        code: 400,
        data: contact,
      });
    }
    return res.status(200).json({
      message: "ok",
      code: 200,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, code: 400 });
  }
};

module.exports = removeContact;
