const express = require("express");
const router = express.Router();
const OrderService = require("../services/orderService");
const OrderServiceInstance = new OrderService();

module.exports = (app) => {
  app.use("/api/orders", router);

  router.get("/", async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await OrderServiceInstance.list(id);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  });

  router.get("/:orderId", async (req, res, next) => {
    try {
      const orderId = req.params.orderId;
      const response = await OrderServiceInstance.findById(orderId);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  });
};
