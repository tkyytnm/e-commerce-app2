const routesLoader = require("../routes");
const expressLoader = require("./express");
const passportLoader = require("./passport");

module.exports = async (app) => {
  const expressApp = await expressLoader(app);
  const passport = await passportLoader(expressApp);
  routesLoader(expressApp, passport);

  // error handler
  app.use((err, req, res, next) => {
    const { status, message } = err;
    res.status(status).send(message);
  });
};
