const express = require("express");
const router = express.Router();
const UserService = require("../services/userService");
const UserServiceInstance = new UserService();

module.exports = (app) => {
  app.use("/users", router);

  router.get("/:userId", async (req, res, next) => {
    try {
      const { userId } = req.params;
      const response = await UserServiceInstance.get(userId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.put("/:userId", async (req, res, next) => {
    try {
      const { userId } = req.params;
      const data = req.body;
      const response = await UserServiceInstance.update({ userId, data });
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  // router.post("/register", async (req, res, next) => {
  //   try {
  //     const data = req.body;
  //     const response = await UserServiceInstance.create(data);
  //     res.status(200).send(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // });
};
