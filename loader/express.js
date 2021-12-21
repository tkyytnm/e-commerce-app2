const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  return app;
};
