const jwt = require("jsonwebtoken");
const Users = require("../../controllers/users");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async isUserExist(email) {
    const user = await Users.getUserByEmail(email);
    return !!user;
  }

  async createUser(body) {
    const { id, email, avatarUrl, verificationToken } = await Users.create(
      body
    );
    return { id, email, avatarUrl, verificationToken };
  }

  async getUser(email, password) {
    const user = await Users.getUserByEmail(email);
    const isValidPassword = await user?.isValidPassword(password);
    const isValidVerify = await user?.verify;

    if (!isValidPassword || !isValidVerify) {
      return null;
    }
    return user;
  }

  async currentUser(body) {
    const user = await Users.getUserByEmail(body);
    if (!user) {
      return null;
    }

    const { id, email, verify, subscription, avatarUrl } = user;
    return { id, email, verify, subscription, avatarUrl };
  }

  getToken(user) {
    const { id } = user;
    const payload = { id };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "8h" });
    return token;
  }

  async setToken(id, token) {
    await Users.updateToken(id, token);
  }
}

module.exports = new AuthService();
