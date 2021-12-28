const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });
const dayjs = require("dayjs");
const format = 'YYYY-MM-DD';

module.exports = class CartModel {
  constructor(data = {}) {
    this.created = data.created || dayjs().format(format);
    this.modified = dayjs().format(format);
    this.converted = data.converted || null;
    this.isActive = data.isActive || true;
  }

  async create(userId) {
    try {
      const data = { user_id: userId };
      const statement = pgp.helpers.insert(data, null, "cart") + ' returning *';
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
