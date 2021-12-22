const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {
    const { email } = data;
    const user = await UserModelInstance.findOneByEmail(email);

    if (user) {
      throw createError(409, "Entered email is already exists.");
    }

    return await UserModelInstance.create(data);
  }
};
