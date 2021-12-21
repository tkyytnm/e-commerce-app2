const express = require("express");
const app = express();
const loaders = require("./loader");
const { PORT } = require("./config");

loaders(app);

app.listen(PORT, () => {
  console.log(`This app listening at http://localhost:${PORT}`);
});
