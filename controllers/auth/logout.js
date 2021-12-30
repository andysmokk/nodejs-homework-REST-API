const AuthService = require("../../service/auth/AuthService");

const authService = new AuthService();

const logout = async (req, res) => {
  await authService.setToken(req.user.id, null);
  res.status(204).json({ status: "success", code: 200 });
};

module.exports = logout;
