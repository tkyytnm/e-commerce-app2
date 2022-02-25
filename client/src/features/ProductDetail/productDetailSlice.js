import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (productId) => {
    const response = await axios.get("/api/products/" + productId);
    return response.data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    isLoading: false,
    productDetail: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productDetailSlice.reducer;
export const isLoadingSelect = (state) => state.productDetail.isLoading;
export const productDetailSelect = (state) => state.productDetail.productDetail;
