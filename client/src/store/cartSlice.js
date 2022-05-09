import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cart/addToCart", async (itemData) => {
  const response = await axios.post("/api/cart/items", itemData);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isPending: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isPending = false;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isPending = false;
    });
  },
});

export default cartSlice.reducer;
export const isPendingSelect = (state) => state.cart.isPending;
