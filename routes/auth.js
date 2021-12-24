const express = require("express");
const router = express.Router();
const AuthService = require("../services/authService");
const AuthServiceInstance = new AuthService();

module.exports = (app, passport) => {
  app.use("/auth", router);

  router.post("/register", async (req, res, next) => {
    try {
      const data = req.body;
      const response = await AuthServiceInstance.register(data);
      res.status(201).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.post(
    "/login",
    passport.authenticate("local"),
    async (req, res, next) => {
      try {
        const { username, password } = req.body;
        const response = await AuthServiceInstance.login({
          email: username,
          password,
        });
        res.status(201).send(response);
      } catch (error) {
        next(error);
      }
    }
  );
};
