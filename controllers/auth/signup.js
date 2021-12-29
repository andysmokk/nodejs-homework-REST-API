const AuthService = require("../../service/auth/AuthService");

const authService = new AuthService();

const signup = async (req, res) => {
  const { email } = req.body;
  const isUserExist = await authService.isUserExist(email);
  if (isUserExist) {
    return res.status(409).json({
      status: "error",
      code: 409,
      message: "Email is already exist",
    });
  }

  const data = await authService.createUser(req.body);
  res.status(200).json({
    status: "successful",
    code: 200,
    data,
  });
};

console.log("Hola registration");
module.exports = signup;
