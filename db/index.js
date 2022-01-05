const { Pool } = require("pg");
const { DB } = require("../config");

const devConfig = `postgresql://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`;

const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: proConfig,
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
