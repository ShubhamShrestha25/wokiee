import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
