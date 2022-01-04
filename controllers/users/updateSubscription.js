const User = require("../../models/User");

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
      return res.status(400).json({
        message: `Cannot update contact with id: ${id}`,
        code: 400,
        data: user,
      });
    }
    return res.status(200).json({
      message: "ok",
      code: 200,
      data: { id, email, subscription },
    });
  } catch (error) {
    res.status(400).json({ message: error.message, code: 400 });
  }
};

module.exports = updateSubscription;
