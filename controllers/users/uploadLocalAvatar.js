// const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");
const {
  FileStorage,
  // CloudStorage,
  LocalStorage,
} = require("../../service/fileStorage");

const uploadLocalAvatar = async (req, res) => {
  const fileStorage = new FileStorage(LocalStorage, req.file, req.user);

  const avatarUrl = await fileStorage.updateAvatar();

  return res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: { avatarUrl },
  });
};

module.exports = uploadLocalAvatar;
