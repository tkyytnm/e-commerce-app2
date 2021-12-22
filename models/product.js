const db = require("../db");

module.exports = class ProductModel {
  async find(categoryId) {
    try {
      if (categoryId) {
        const statement = `
          select products.id, products.name, products.price
          from products, categories, categories_products
          where products.id = categories_products.product_id
          and categories.id = categories_products.category_id
          and categories.id = $1
        `;
        const values = [categoryId];
        const result = await db.query(statement, values);

        if (result.rows?.length) {
          return result.rows;
        }
        return [];
      } else {
        const result = await db.query("select * from products");

        if (result.rows?.length) {
          return result.rows;
        }
        return [];
      }
    } catch (error) {
      throw error;
    }
  }

  async findOne(productId) {
    try {
      const values = [productId];
      const result = await db.query(
        "select * from products where id = $1",
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
};
