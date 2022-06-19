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

export const fetchSearchData = createAsyncThunk(
  "products/fetchSearchData",
  async (searchInput) => {
    const res = await axios.get(`${url}/searchresults/${searchInput}`);
    return res?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [viewProducts.fulfilled]: (state, action) => {
      state.singleProduct = action.payload;
    },
    [fetchSearchData.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
