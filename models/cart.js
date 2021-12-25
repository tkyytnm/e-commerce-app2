const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });

module.exports = class CartModel {
  async create(userId) {
    try {
      const data = { user_id: userId };
      const statement = pgp.helpers.insert(data, null, "cart");
      console.log(statement);
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(cartId) {
    try {
      const statement = ``;
      const values = [cartId];
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
