const jwt = require("jsonwebtoken");
const Users = require("../controllers/users");
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, SECRET_KEY);
    return !!verify;
  } catch (error) {
    return false;
  }
};

const guard = async (req, res, next) => {
  const token = req.get("authorization")?.split(" ")[1];
  const isVerifyToken = verifyToken(token);
  if (!isVerifyToken) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Not authorized",
    });
  }
  const payload = jwt.decode(token);
  const user = await Users.getUserById(payload.id);
  if (!user || user.token !== token) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Not authorized",
    });
  }
  req.user = user;
  next();
};

module.exports = guard;
