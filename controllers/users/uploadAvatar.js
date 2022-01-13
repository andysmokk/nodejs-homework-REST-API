// const User = require("../../models/User");
const httpCode = require("../../lib/httpCodes");
const {
  FileStorage,
  // CloudStorage,
  LocaleStorage,
} = require("../../service/fileStorage");

const uploadAvatar = async (req, res) => {
  const fileStorage = new FileStorage(LocaleStorage, req.file, req.user);

  const avatarUrl = fileStorage.updateAvatar();

  return res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: { avatarUrl },
  });
};

module.exports = uploadAvatar;
