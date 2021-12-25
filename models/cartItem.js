const db = require("../db");
const pgp = require("pg-promise");

module.exports = class CartItemModel {
  async getItems(cartId) {
    try {
      const statement = `select * from cartItems where cart_id = $1`;
      const values = [cartId];
      const result = await db.query();

      if (result.rows?.length) {
        return result.rows;
      }

      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
};
