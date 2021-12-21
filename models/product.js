const db = require("../db");

module.exports = class ProductModel {
  async find(categoryId) {
    try {
      if (categoryId) {
        const text = `
          select products.id, products.name, products.price
          from products, categories, categories_products
          where products.id = categories_products.product_id
          and categories.id = categories_products.category_id
          and categories.id = $1
        `;
        const value = categoryId;
        const result = await db.any(text, value);
        return result;
      } else {
        const result = await db.any("select * from products");
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async findOne(productId) {
    try {
      const values = [productId];
      console.log(values);
      const result = await db.any(
        "select * from products where id = $1",
        values
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
};
