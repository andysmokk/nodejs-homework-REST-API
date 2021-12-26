const Contact = require("../../models/Contact");

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
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
  // const { id } = req.params;
  // const contactById = await models.getContactById(id);
  // if (contactById) {
  //   return res.status(200).json(contactById);
  // }
  // res.status(404).json({ message: "Contact not found" });
};

module.exports = getContact;
