const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {
    try {
      const { email } = data;
      const user = await UserModelInstance.findOneByEmail(email);

      if (user) {
        throw createError(409, "Email is already in use.");
      }

      return await UserModelInstance.create(data);
    } catch (error) {
      throw createError(500, error);
    }
  }

  async login(data) {
    try {
      const { email, password } = data;
      const user = await UserModelInstance.findOneByEmail(email);

      if (!user) {
        throw createError(401, "Invalid username");
      }
      if (user.password !== password) {
        throw createError(401, "Invalid password");
      }

      return user;
    } catch (error) {
      throw createError(500, error);
    }
  }
};
