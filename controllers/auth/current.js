const AuthService = require("../../service/auth/AuthService");

const authService = new AuthService();

const current = async (req, res) => {
  const { email } = req.body;
  const user = await authService.currentUser(email);
  if (!user) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Not authorized",
    });
  }

  res.status(200).json({
    status: "successful",
    code: 200,
    data: user,
  });
};

module.exports = current;
