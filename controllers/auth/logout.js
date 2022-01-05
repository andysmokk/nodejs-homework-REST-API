const AuthService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");

const authService = new AuthService();

const logout = async (req, res) => {
  await authService.setToken(req.user.id, null);
  res
    .status(httpCode.NO_CONTENT)
    .json({ status: "success", code: httpCode.NO_CONTENT });
};

module.exports = logout;
