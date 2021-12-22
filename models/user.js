const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });

module.exports = class UserModel {
  async create(data) {
    try {
      const statement = pgp.helpers.insert(data, null, "users");

      const result = db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(data) {
    try {
      const { userId, ...params } = data;
      const condition = pgp.as.format(" where id = ${userId}", { userId });
      const statement =
        pgp.helpers.update(params.data, null, "users") + condition;

      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

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
      throw new Error(error);
    }
  }

  async findOneByEmail(email) {
    try {
      const values = [email];
      const result = await db.query(
        "select * from users where email = $1",
        values
      );
      if (result.rows?.length) {
        return result.rows;
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
};
