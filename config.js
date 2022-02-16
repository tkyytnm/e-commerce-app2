module.exports = {
  PORT: process.env.PORT,
  DB: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DATABASE: process.env.DB_NAME,
    USERNAME: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
  },
  GOOGLE: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  },
  FACEBOOK: {},
};
