const express = require("express");
const { uploadAvatar } = require("../../controllers/users");
const { guard, upload } = require("../../middlewares");

const router = express.Router();

router.route("/avatars").patch(guard, upload.single("avatar"), uploadAvatar);

module.exports = router;
