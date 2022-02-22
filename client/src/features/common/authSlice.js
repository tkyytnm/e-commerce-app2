import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const submitLogin = createAsyncThunk(
  "auth/submitLogin",
  async (user) => {
    await axios.post("/api/auth/login", user);
    return user.username;
  }
);

export const submitLogout = createAsyncThunk("auth/submitLogout", async () => {
  await axios.post("/api/auth/logout");
  return;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    isLoggedIn: false,
    isSubmitting: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitLogin.pending, (state, action) => {
      state.isSubmitting = true;
    });
    builder.addCase(submitLogin.fulfilled, (state, action) => {
      state.userName = action.payload;
      state.isSubmitting = false;
      state.isLoggedIn = true;
    });
    builder.addCase(submitLogin.rejected, (state, action) => {
      state.isSubmitting = false;
    });

    builder.addCase(submitLogout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });
  },
});

// export const {} = loginSlice.actions;
export default authSlice.reducer;
export const isSubmittingSelect = (state) => state.auth.isSubmitting;
export const isLoggedInSelect = (state) => state.auth.isLoggedIn;
export const userNameSelect = (state) => state.auth.userName;
