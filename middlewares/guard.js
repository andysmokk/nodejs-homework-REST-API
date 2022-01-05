const jwt = require("jsonwebtoken");
const Users = require("../controllers/users");
const httpCode = require("../lib/httpCodes");

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
    return res.status(httpCode.UNAUTHORIZED).json({
      status: "error",
      code: httpCode.UNAUTHORIZED,
      message: "Not authorized",
    });
  }
  const payload = jwt.decode(token);
  const user = await Users.getUserById(payload.id);
  if (!user || user.token !== token) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: "error",
      code: httpCode.UNAUTHORIZED,
      message: "Not authorized",
    });
  }
  req.user = user;
  next();
};

module.exports = guard;
