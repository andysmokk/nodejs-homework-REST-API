const AuthService = require("../../service/auth/AuthService");

const authService = new AuthService();

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.getUser(email, password);
  if (!user) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Email or password is wrong",
    });
  }

  const token = authService.getToken(user);
  await authService.setToken(user.id, token);

  res.status(200).json({
    status: "successful",
    code: 200,
    data: { token },
  });
};

module.exports = login;
