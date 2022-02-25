import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authSlice";
import product from "./productSlice";
import cart from "./cartSlice";

export default combineReducers({
  auth,
  product,
  cart,
});
