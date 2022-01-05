const express = require("express");
const { signup, login, logout, current } = require("../../controllers/auth");
const { updateSubscription } = require("../../controllers/users");
const {
  guard,
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
} = require("../../middlewares");

const router = express.Router();

router.route("/:id").patch(guard, subscriptionUserValidation, updateSubscription);
router.route("/signup").post(createUserValidation, signup);
router.route("/login").post(loginUserValidation, login);
router.route("/current").get(guard, current);
router.route("/logout").post(guard, logout);

module.exports = router;
