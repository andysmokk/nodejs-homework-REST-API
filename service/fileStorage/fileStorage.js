const Jimp = require("jimp");

class FileStorage {
  constructor(Storage, file, user) {
    this.storage = new Storage(file, user);
    this.pathFile = file.path;
  }

  async updateAvatar() {
    await this.transformAvatar(this.pathFile);
    const userUrlAvatar = await this.storage.save();
    return userUrlAvatar;
  }

  async transformAvatar(pathFile) {
    const picture = await Jimp.read(pathFile);
    await picture
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(pathFile);
  }
}

module.exports = FileStorage;
