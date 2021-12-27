const ProductModel = require("../models/product");
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
  async list(categoryId) {
    try {
      const products = await ProductModelInstance.find(categoryId);
      return products;
    } catch (error) {
      throw error;
    }
  }

  async get(productId) {
    try {
      const product = await ProductModelInstance.findOne(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }
};
