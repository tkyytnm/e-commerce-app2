import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (itemData) => {
    const response = await axios.post("/api/cart/items", itemData);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state, action) => {});
    builder.addCase(addToCart.fulfilled, (state, action) => {});
    builder.addCase(addToCart.rejected, (state, action) => {});
  },
});

export default cartSlice.reducer;