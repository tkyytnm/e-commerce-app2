const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

module.exports = (app) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session({ secret: "dogs", resave: false, saveUninitialized: false }));
  return app;
};
