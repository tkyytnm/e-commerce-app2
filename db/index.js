const { Pool } = require("pg");
const { DB } = require("../config");

const devConfig = {
  connectionString: `postgres://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.DATABASE}`,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
