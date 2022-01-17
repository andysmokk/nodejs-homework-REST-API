const getUserById = require("./getUserById");
const getUserByEmail = require("./getUserByEmail");
const create = require("./create");
const updateToken = require("./updateToken");
const updateSubscription = require("./updateSubscription");
const uploadLocalAvatar = require("./uploadLocalAvatar");
const uploadCloudAvatar = require("./uploadCloudAvatar");

module.exports = {
  getUserById,
  getUserByEmail,
  create,
  updateToken,
  updateSubscription,
  uploadLocalAvatar,
  uploadCloudAvatar,
};
