const Contact = require("../../models/Contact");
const httpCode = require("../../lib/httpCodes");
const CustomError = require("../../lib/customError");

const getAllContacts = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { page = 1, limit = 5, favorite = false } = req.query;
    const skip = (page - 1) * limit;
    const total = await Contact.find({
      owner: userId,
      favorite,
    }).countDocuments();

    const contacts = await Contact.find({ owner: userId, favorite })
      .skip(skip)
      .limit(Number(limit))
      .populate({
        path: "owner",
        select: "email subscription",
      });

    return res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      total,
      page,
      data: { perPage: contacts.length, contacts },
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

module.exports = getAllContacts;
