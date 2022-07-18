import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart_slice.js"

export const store = configureStore({
  reducer: cartReducer,
})