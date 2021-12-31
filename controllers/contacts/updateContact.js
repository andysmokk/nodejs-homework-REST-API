const Contact = require("../../models/Contact");

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const contact = await Contact.findOneAndUpdate(
      { _id: id, owner: userId },
      { ...req.body },
      {
        new: true,
        runValidators: true,
      }
    );
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
};

module.exports = updateContact;
