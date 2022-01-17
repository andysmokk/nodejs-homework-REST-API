const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const contact = await Contact.findOne({ id, owner: userId }).populate({
      path: "owner",
      select: "email subscription",
    });
    if (!contact) {
      return res.status(httpCode.OK).json({
        message: `Cannot find contact with id: ${id}`,
        code: httpCode.OK,
        data: contact,
      });
    }
    return res.status(httpCode.OK).json({
      status: "successful",
      code: 200,
      data: contact,
    });
  } catch (error) {
    res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message, code: httpCode.BAD_REQUEST });
  }
};

module.exports = getContact;
