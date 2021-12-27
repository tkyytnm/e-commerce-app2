const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });

module.exports = class CartModel {
  async create(userId) {
    try {
      const data = { user_id: userId };
      const statement = pgp.helpers.insert(data, null, "cart");
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findById(id) {
    try {
      const statement = `select * from cart where id = $1`;
      const values = [id];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findByUser(userId) {
    try {
      const statement = `select * from cart where user_id = $1`;
      const values = [userId];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
};
