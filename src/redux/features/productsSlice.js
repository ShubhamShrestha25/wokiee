import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    () => {
        axios.get("")
    }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
