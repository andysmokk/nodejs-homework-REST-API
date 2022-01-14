const cloudinary = require("cloudinary").v2;

class CloudStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
  }

  async save() {}
}

module.exports = CloudStorage;
