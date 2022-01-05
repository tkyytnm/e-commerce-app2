const express = require("express");
const app = express();
const loaders = require("./loader");
const { PORT } = require("./config") || 3000;

async function startServer() {
  loaders(app);

  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}

startServer();
