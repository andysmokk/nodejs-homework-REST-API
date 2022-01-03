const express = require("express");
const { signup, login, logout, current } = require("../../controllers/auth");
const {
  guard,
  createUserValidation,
  loginUserValidation,
} = require("../../middlewares");

const router = express.Router();

router.route("/signup").post(createUserValidation, signup);
router.route("/login").post(loginUserValidation, login);
router.route("/current").get(guard, current);
router.route("/logout").post(guard, logout);

module.exports = router;
