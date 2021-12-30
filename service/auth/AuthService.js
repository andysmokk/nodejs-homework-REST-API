const jwt = require("jsonwebtoken");
const Users = require("../../controllers/users");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async isUserExist(email) {
    const user = await Users.getUserByEmail(email);
    return !!user;
  }

  async createUser(body) {
    const { id, name, email } = await Users.create(body);
    return { id, name, email };
  }

  async getUser(email, password) {
    const user = await Users.getUserByEmail(email);
    const isValidPassword = await user?.isValidPassword(password);
    if (!isValidPassword) {
      return null;
    }
    return user;
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

module.exports = AuthService;
