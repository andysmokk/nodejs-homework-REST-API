const path = require("path");
const fs = require("fs/promises");
const Users = require("../../controllers/users");

const AVATARS_DIR = process.env.AVATARS_DIR;

class LocaleStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatars = AVATARS_DIR;
  }

  async save() {}
}

module.exports = LocaleStorage;
