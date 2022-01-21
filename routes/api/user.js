const express = require("express");
const {
  uploadLocalAvatar,
  uploadCloudAvatar,
  verifyUser,
  repeatEmailForVerifyUser,
} = require("../../controllers/users");
const { guard, upload } = require("../../middlewares");

const router = express.Router();

router
  .route("/local/avatars")
  .patch(guard, upload.single("avatar"), uploadLocalAvatar);
router
  .route("/cloud/avatars")
  .patch(guard, upload.single("avatar"), uploadCloudAvatar);
router.route("/verify/:verificationToken").get(verifyUser);
router.route("/verify").post(repeatEmailForVerifyUser);

module.exports = router;
