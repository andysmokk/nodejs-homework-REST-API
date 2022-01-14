const path = require("path");
const fs = require("fs/promises");
const updateAvatar = require("../../controllers/users/updateAvatar");
// const Users = require("../../controllers/users");

const UPLOAD_DIR = process.env.UPLOAD_DIR;
const AVATARS_DIR = process.env.AVATARS_DIR;

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatars = `${UPLOAD_DIR}/${AVATARS_DIR}`;
  }

  async save() {
    const destination = path.join(this.folderAvatars, this.userId);
    await fs.mkdir(destination, { recursive: true });
    await fs.rename(this.filePath, path.join(destination, this.filename));
    const avatarUrl = path.normalize(path.join(this.userId, this.filename));
    // await Users.updateAvatar(this.userId, avatarUrl);
    await updateAvatar(this.userId, avatarUrl);
    return avatarUrl;
  }
}

module.exports = LocalStorage;
