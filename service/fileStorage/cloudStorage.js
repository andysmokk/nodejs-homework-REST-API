const cloudinary = require("cloudinary").v2;
const { promisify } = require("util");
const { unlink } = require("fs/promises");
const updateAvatar = require("../../controllers/users/updateAvatar");

const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_SECRET = process.env.CLOUD_SECRET;

const COULD_FOLDER_AVATARS = "Avatars";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_SECRET,
  secure: true,
});

class CloudStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filePath = file.path;
    console.log(
      "🚀 ~ file: cloudStorage.js ~ line 23 ~ CloudStorage ~ constructor ~ this.filePath",
      this.filePath
    );
    this.idAvatarCloud = user.idAvatarCloud;
    this.folderAvatars = COULD_FOLDER_AVATARS;
    this.uploadCloud = promisify(cloudinary.uploader.upload);
  }

  async save() {
    const { public_id: returnedIdAvatarCloud, secure_url: avatarUrl } =
      await this.uploadCloud(this.filePath, {
        public_id: this.idAvatarCloud,
        folder: this.folderAvatars,
      });

    const newIdAvatarCloud = returnedIdAvatarCloud.replace(
      `${this.folderAvatars}/`,
      ""
    );

    await updateAvatar(this.userId, avatarUrl, newIdAvatarCloud);
    await this.removeUploadFile(this.filePath);

    return avatarUrl;
  }

  async removeUploadFile(filePath) {
    try {
      await unlink(filePath);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = CloudStorage;
