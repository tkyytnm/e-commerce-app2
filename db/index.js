const pgp = require("pg-promise")();
const config = require("../config");

const cn = {
  host: config.DB.HOST,
  port: config.DB.PORT,
  database: config.DB.DATABASE,
  user: config.DB.USERNAME,
  password: config.DB.PASSWORD,
};
const db = pgp(cn);

module.exports = db;
