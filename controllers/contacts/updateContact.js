const Contact = require("../../models/Contact");

const updateContact = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!contact) {
      return res.status(400).json({
        message: `Cannot update contact with id: ${id}`,
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
  // const { id } = req.params;
  // const updatedContact = await models.updateContact(id, req.body);
  // if (updatedContact) {
  //   return res.status(200).json(updatedContact);
  // }
  // res.status(404).json({ message: "Contact not found" });
};

module.exports = updateContact;
