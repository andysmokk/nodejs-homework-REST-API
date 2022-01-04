const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");

const addContact = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const contact = await Contact.create({ ...req.body, owner: userId });
    return res.status(httpCode.CREATED).json({
      status: "successful",
      code: httpCode.CREATED,
      data: contact,
    });
  } catch (error) {
    res.status(httpCode.BAD_REQUEST).json({
      message: error.message,
      code: httpCode.BAD_REQUEST,
    });
  }
};

module.exports = addContact;
