const httpCode = require("../../lib/httpCodes");
const { FileStorage, CloudStorage } = require("../../service/fileStorage");

const uploadCloudAvatar = async (req, res) => {
  const fileStorage = new FileStorage(CloudStorage, req.file, req.user);

  const avatarUrl = await fileStorage.updateAvatar();

  return res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: { avatarUrl },
  });
};

module.exports = uploadCloudAvatar;
