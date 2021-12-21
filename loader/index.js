const routesLoader = require("../routes");
const expressLoader = require("./express");

module.exports = async (app) => {
  const expressApp = await expressLoader(app);
  routesLoader(expressApp);

  // error handler
  app.use((err, req, res, next) => {
    const { status, message } = err;
    res.status(status).send(message);
  });
};
