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

  router.post("/login", passport.authenticate("local"), (req, res, next) => {
    try {
      res.end();
    } catch (error) {
      next(error);
    }
  });

  router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("http://localhost:3000/products");
    }
  );

  router.get(
    "/facebook",
    passport.authenticate("facebook", { scope: ["public_profile"] })
  );

  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("http://localhost:3000/products");
    }
  );

  router.post("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/products");
  });
};
