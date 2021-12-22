const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });

module.exports = class UserModel {
  async findOneById(userId) {
    try {
      const values = [userId];
      const result = await db.query(
        "select * from users where id = $1",
        values
      );
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async update(data) {
    try {
      const { userId, ...params } = data;
      console.log(params);
      const condition = pgp.as.format(" where id = ${userId}", { userId });
      const statement =
        pgp.helpers.update(
          params.data,
          ["name", "email", "password"],
          "users"
        ) + condition;

      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      
    } catch (error) {
      
    }
  }
};
