const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class UserService {
  async get(userId) {
    const user = await UserModelInstance.findOneById(userId);
    return user;
  }

  async update(data) {
    const user = await UserModelInstance.update(data);
    return user;
  }
};
