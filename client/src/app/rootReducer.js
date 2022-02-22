import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/common/authSlice";

export default combineReducers({
  auth,
});
