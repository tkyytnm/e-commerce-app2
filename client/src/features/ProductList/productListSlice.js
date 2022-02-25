import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  async () => {
    const response = await axios.get("api/products");
    return response.data;
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    isLoading: false,
    productList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productListSlice.reducer;
export const isLoadingSelect = (state) => state.productList.isLoading;
export const productListSelect = (state) => state.productList.productList;
