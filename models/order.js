const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });
const OrderItemModel = require("./orderItem");
const dayjs = require("dayjs");
const format = "YYYY-MM-DD";

module.exports = class OrderModel {
  constructor(data = {}) {
    this.created = data.created || dayjs().format(format);
    this.items = data.items || [];
    this.modified = dayjs().format(format);
    this.status = data.status || "PENDING";
    this.total = data.total || 0;
    this.user_id = data.userId || null;
  }

  addItems(items) {
    this.items = items.map((item) => new OrderItemModel(item));
  }

  async create() {
    try {
      const { items, ...order } = this;
      const statement =
        pgp.helpers.insert(order, null, "orders") + " RETURNING *";
      const result = await db.query(statement);

      if (result.rows?.length) {
        Object.assign(this, result.rows[0]);

        for (let i = 0; i < this.items.length; i++) {
          const order_id = result.rows[0].id;
          const item = this.items[i];
          const OrderItem = new OrderItemModel();
          await OrderItem.create({ order_id, ...item });
        }

        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(data) {
    try {
      const condition = pgp.as.format("where id = ${id} returning *", {
        id: this.id,
      });
      const statement = pgp.helpers.update(data, null, "orders") + condition;
      const result = await db.query(statement);

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
      const statement = "select * from orders where user_id = $1";
      const values = [userId];
      const result = await db.query(statement, values);
      if (result.rows?.length) {
        return result.rows;
      }
      return [];
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findById(orderId) {
    try {
      const statement = "select * from orders where id = $1";
      const values = [orderId];
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
