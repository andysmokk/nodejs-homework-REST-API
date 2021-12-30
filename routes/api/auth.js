const express = require("express");
const { signup, login, logout, current } = require("../../controllers/auth");
const { guard } = require("../../middlewares");
// const {
//   addContactValidation,
//   updateContactValidation,
//   updateContactFavoriteValidation,
//   idValidation,
// } = require("../../middlewares/index");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/current").get(guard, current);
router.route("/logout").post(guard, logout);

module.exports = router;
