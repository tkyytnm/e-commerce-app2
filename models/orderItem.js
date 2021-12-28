const db = require("../db");
const pgp = require("pg-promise")({ capSQL: true });
const dayjs = require("dayjs");
const format = 'YYYY-MM-DD';

module.exports = class OrderItemModel {
  constructor(data = {}) {
    this.created = data.created || dayjs().format(format);
    this.description = data.description;
    this.modified = dayjs().format(format);
    this.name = data.name;
    this.price = data.price || 0;
    this.productId = data.id;
    this.qty = data.qty || 1;
    this.orderId = data.orderId || null;
  }

  async create() {

  }

  async find() {

  }
};
