const authService = require("../../service/auth/AuthService");
const httpCode = require("../../lib/httpCodes");

// const authService = new AuthService();

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.getUser(email, password);
  console.log("🚀 ~ file: login.js ~ line 9 ~ login ~ user", user);
  if (!user) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: "error",
      code: httpCode.UNAUTHORIZED,
      message: "Email or password is wrong",
    });
  }

  const token = authService.getToken(user);
  await authService.setToken(user.id, token);

  res.status(httpCode.OK).json({
    status: "successful",
    code: httpCode.OK,
    data: { token },
  });
};

module.exports = login;
