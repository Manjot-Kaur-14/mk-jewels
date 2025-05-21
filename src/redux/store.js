import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  // reducer: {
  //   reducer: cartReducer,
  // },
  reducer: {
    user: loginReducer,
    product: cartReducer,
  },
});

export default store;
