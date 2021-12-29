const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });
const dayjs = require("dayjs");
const format = "YYYY-MM-DD";

module.exports = class OrderItemModel {
  constructor(data = {}) {
    this.created = data.created || dayjs().format(format);
    this.description = data.description;
    this.modified = dayjs().format(format);
    this.name = data.name;
    this.price = data.price || 0;
    this.product_id = data.id;
    this.qty = data.qty || 1;
  }

  async create(data) {
    try {
      const statement =
        pgp.helpers.insert(data, null, "order_items") + " returning *";
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async find(orderId) {
    try {
      const statement = `
        select oi.qty,
          oi.id AS cartItemId,
          p.*
        FROM order_items oi, products p
        WHERE oi.product_id = p.id
        AND oi.order_id = $1
      `;
      const values = [orderId];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows;
      }
      return [];
    } catch (error) {
      throw new Error(error);
    }
  }
};
