const express = require("express");
const { signup, login, logout } = require("../../controllers/auth");
// const {
//   addContactValidation,
//   updateContactValidation,
//   updateContactFavoriteValidation,
//   idValidation,
// } = require("../../middlewares/index");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
