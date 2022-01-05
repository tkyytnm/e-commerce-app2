const { Pool } = require("pg");
const { DB } = require("../config");
require("dotenv").config();

const devConfig = `postgresql://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`;

const proConfig = process.env.DATABASE_URL;
console.log(proConfig);

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
