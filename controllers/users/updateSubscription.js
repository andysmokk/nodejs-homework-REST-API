const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");

const updateSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.user;
    const { subscription } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(httpCode.BAD_REQUEST).json({
        message: `Cannot update contact with id: ${id}`,
        code: httpCode.BAD_REQUEST,
        data: user,
      });
    }

    return res.status(httpCode.OK).json({
      status: "successful",
      code: httpCode.OK,
      data: { id, email, subscription },
    });
  } catch (error) {
    res
      .status(httpCode.BAD_REQUEST)
      .json({ message: error.message, code: httpCode.BAD_REQUEST });
  }
};

module.exports = updateSubscription;
