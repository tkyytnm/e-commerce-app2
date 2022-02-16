const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

module.exports = (app) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session({ secret: "dsga134sdf4354hgre54gae", resave: false, saveUninitialized: false }));
  return app;
};
