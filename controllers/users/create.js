const User = require("../../models/User");

const create = async (body) => {
  const user = new User(body);
  return await user.Save();
};

module.exports = create;
