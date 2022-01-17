const express = require("express");
const {
  uploadLocalAvatar,
  uploadCloudAvatar,
} = require("../../controllers/users");
const { guard, upload } = require("../../middlewares");

const router = express.Router();

router
  .route("/local/avatars")
  .patch(guard, upload.single("avatar"), uploadLocalAvatar);
router
  .route("/cloud/avatars")
  .patch(guard, upload.single("avatar"), uploadCloudAvatar);

module.exports = router;
