const Users = require("../../controllers/users");

class AuthService {
  async isUserExist(email) {
    const user = await Users.getUserByEmail(email);
    return !!user;
  }

  async createUser(body) {
    const { id, name, email } = await Users.create(body);
    return { id, name, email };
  }
}

module.exports = AuthService;
