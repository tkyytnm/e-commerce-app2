const ProductModel = require("../models/product");
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
  async list(categoryId) {
    const products = await ProductModelInstance.find(categoryId);
    return products;
  }

  async get(productId) {
    const product = await ProductModelInstance.findOne(productId);
    return product;
  }
};
