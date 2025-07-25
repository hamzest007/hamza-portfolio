import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice"
import wishlistReducer from "./wishlistSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  },
});
