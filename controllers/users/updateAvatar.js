const User = require("../../models/User");

const updateAvatar = async (id, avatar, idAvatarCloud = null) => {
  return await User.updateOne({ _id: id }, { avatar, idAvatarCloud });
};

module.exports = updateAvatar;
