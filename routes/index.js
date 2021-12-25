const productRouter = require("./product");
const userRouter = require("./user");
const authRouter = require("./auth");
const cartRouter = require("./cart");

module.exports = (app, passport) => {
  authRouter(app, passport);
  userRouter(app);
  cartRouter(app);
  productRouter(app);
};
