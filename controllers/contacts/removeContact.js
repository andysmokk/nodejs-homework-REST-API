const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

const removeContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const contact = await Contact.findOneAndDelete({ owner: userId, _id: id });
    if (!contact) {
      throw new CustomError(
        httpCode.BAD_REQUEST,
        `Cannot remove contact with id: ${id}`
      );
      // return res.status(httpCode.BAD_REQUEST).json({
      //   message: `Cannot remove contact with id: ${id}`,
      //   code: httpCode.BAD_REQUEST,
      //   data: contact,
      // });
    }
    return res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      data: contact,
    });
  } catch (error) {
    throw new CustomError(httpCode.BAD_REQUEST, error.message);
    //   res
    //     .status(httpCode.BAD_REQUEST)
    //     .json({ message: error.message, code: httpCode.BAD_REQUEST });
  }
};

module.exports = removeContact;
