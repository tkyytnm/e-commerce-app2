const routesLoader = require("../routes");
const expressLoader = require("./express");
const passportLoader = require("./passport");
const swaggerLoader = require("./swagger");

module.exports = (app) => {
  const expressApp = expressLoader(app);
  const passport = passportLoader(expressApp);
  routesLoader(expressApp, passport);
  swaggerLoader(expressApp);

  // error handler
  app.use((err, req, res, next) => {
    const { status, message } = err;
    res.status(status).send(message);
  });
};
