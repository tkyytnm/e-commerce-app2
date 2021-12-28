const express = require("express");
const router = express.Router();
const OrderService = require("../services/orderService");
const OrderServiceInstance = new OrderService();

module.exports = (app) => {
  app.use("/order", router);

  router.get("/", async (req, res, next) => {
    try {
      const id = req
      const response = await OrderServiceInstance.loadItems(id);
    } catch (error) {
      return next(error);
    }
  });

  router.get("/:orderId", async (req, res, next) => {
    try {
    } catch (error) {
      return next(error);
    }
  });
};
