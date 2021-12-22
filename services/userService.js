const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class UserService {
  async get(userId) {
    try {
      const user = await UserModelInstance.findOneById(userId);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(data) {
    try {
      const user = await UserModelInstance.update(data);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data) {
    try {
      const user = await UserModelInstance.create(data);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
};