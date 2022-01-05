const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");

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
      return res.status(httpCode.BAD_REQUEST).json({
        message: `Cannot update contact with id: ${id}`,
        code: httpCode.BAD_REQUEST,
        data: contact,
      });
    }
    return res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      data: contact,
    });
  } catch (error) {
    res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message, code: httpCode.BAD_REQUEST });
  }
};

module.exports = updateContact;
