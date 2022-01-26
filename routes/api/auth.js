const express = require("express");
const { signup, login, logout, current } = require("../../controllers/auth");
const { updateSubscription } = require("../../controllers/users");
const {
  guard,
  createUserValidation,
  loginUserValidation,
  subscriptionUserValidation,
  errorHandler,
} = require("../../middlewares");

const router = express.Router();

router
  .route("/:id")
  .patch(errorHandler(guard), subscriptionUserValidation, updateSubscription);
router.route("/signup").post(createUserValidation, errorHandler(signup));
router.route("/login").post(loginUserValidation, errorHandler(login));
router.route("/current").get(errorHandler(guard), errorHandler(current));
router.route("/logout").post(errorHandler(guard), errorHandler(logout));

module.exports = router;
