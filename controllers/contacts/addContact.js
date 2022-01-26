const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

const addContact = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { email } = req.body;
    const contact = await Contact.findOne({ email, owner: userId });

    if (contact) {
      throw new CustomError(httpCode.CONFLICT, "Contact exists");
      // return res.status(httpCode.CONFLICT).json({
      //   status: "error",
      //   code: httpCode.CONFLICT,
      //   message: "Contact exists",
      // });
    }

    const newContact = await Contact.create({ ...req.body, owner: userId });
    return res.status(httpCode.CREATED).json({
      status: "successful",
      code: httpCode.CREATED,
      data: newContact,
    });
  } catch (error) {
    throw new CustomError(httpCode.BAD_REQUEST, error.message);
    // res.status(httpCode.BAD_REQUEST).json({
    //   status: "error",
    //   code: httpCode.BAD_REQUEST,
    //   message: error.message,
    // });
  }
};

module.exports = addContact;
