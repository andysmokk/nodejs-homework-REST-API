const Contact = require("../../models/Contact");

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const contact = await Contact.findOne({ id, owner: userId });
    console.log("CONTACT_ID", id);
    console.log("USER_ID", userId);
    if (!contact) {
      return res.status(200).json({
        message: `Cannot find contact with id: ${id}`,
        code: 200,
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

module.exports = getContact;
