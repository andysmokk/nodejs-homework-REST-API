const express = require("express");
const { registration, login, logout } = require("../../controllers/auth");
// const {
//   addContactValidation,
//   updateContactValidation,
//   updateContactFavoriteValidation,
//   idValidation,
// } = require("../../middlewares/index");

const router = express.Router();

router.route("/registration").post(registration);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
