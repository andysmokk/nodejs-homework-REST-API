const Contact = require("../../models/Contact");

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
    return res.status(200).json({
      message: "ok",
      code: 200,
      total,
      page,
      data: { perPage: contacts.length, contacts },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400,
    });
  }
};

module.exports = getAllContacts;
