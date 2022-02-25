import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  async () => {
    const response = await axios.get("api/products");
    return response.data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchProductDetail",
  async (productId) => {
    const response = await axios.get("/api/products/" + productId);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    productList: [],
    productDetail: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state, action) => {
        state.isLoading = true;
        state.productList = [];
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.isLoading = true;
        state.productDetail = {};
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

export default productSlice.reducer;
export const isLoadingSelect = (state) => state.product.isLoading;
export const productListSelect = (state) => state.product.productList;
export const productDetailSelect = (state) => state.product.productDetail;
