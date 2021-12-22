const express = require("express");
const router = express.Router();
const ProductService = require("../services/productService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/products", router);

  router.get("/", async (req, res, next) => {
    try {
      const categoryId = req.query.categoryId;
      const response = await ProductServiceInstance.list(categoryId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.get("/:productId", async (req, res, next) => {
    try {
      const { productId } = req.params;
      const response = await ProductServiceInstance.get(productId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });
};
