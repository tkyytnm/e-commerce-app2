const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });

module.exports = class CartItemModel {
  static async create(data) {
    try {
      const statement = pgp.helpers.insert(data, null, "cart_items") + ' returning *';
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows;
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(id, data) {
    try {
      const condition = pgp.as.format(` where id = $1 returning *`, [id]);
      const statement =
        pgp.helpers.update(data, null, "cart_items") + condition;
      console.log(statement);
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows;
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async find(cart_id) {
    try {
      const statement = `
        select ci.qty, ci.id AS cartItemId, p.*
        from cart_items ci, products p
        where ci.product_id = p.id
        AND cart_id = $1`;
      const values = [cart_id];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows;
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async delete(id) {
    try {
      const statement = `delete from cart_items where id = $1 returning *`;
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
};
