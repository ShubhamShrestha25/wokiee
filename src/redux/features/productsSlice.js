import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  singleProduct: [],
};

const url = "http://localhost:8000";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(`${url}/products`);
    return res?.data;
  }
);

export const viewProducts = createAsyncThunk(
  "product/viewProducts",
  async (id) => {
    const res = await axios.get(`${url}/products/${id}`);
    return res?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: () => {
      console.log("pending");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      console.log("successfull");
      state.products = action.payload;
    },
    [fetchProducts.rejected]: () => {
      console.log("failed");
    },
    [viewProducts.fulfilled]: (state, action) => {
      console.log("successfull");
      state.singleProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;
