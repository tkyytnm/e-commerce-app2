const express = require("express");
const router = express.Router();
const CartService = require("../services/cartService");
const CartServiceInstance = new CartService();

module.exports = (app) => {
  app.use("/cart", router);

  router.post("/", async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await CartServiceInstance.create({ userId: id });
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  });

  router.post("/:cartId", async (req, res, next) => {
    try {
      const { id } = req.user;
      const { product_id, qty } = req.body;
      const response = await CartServiceInstance.list(cartId);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  });

  router.get("/:cartId", async (req, res, next) => {
    try {
      const { id } = req.user;
      const { cartId } = req.query;
      const response = await CartServiceInstance.list(cartId);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  });
};
