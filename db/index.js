const { Pool } = require("pg");
const { DB } = require("../config");

const pool = new Pool({
  user: DB.USERNAME,
  host: DB.HOST,
  database: DB.DATABASE,
  password: DB.PASSWORD,
  port: DB.PORT
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
