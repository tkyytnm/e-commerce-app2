import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/common/authSlice";
import productList from "../features/ProductList/productListSlice";
import productDetail from "../features/ProductDetail/productDetailSlice";

export default combineReducers({
  auth,
  productList,
  productDetail,
});
