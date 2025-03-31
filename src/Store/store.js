import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Keyinroq yaratamiz
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Savatcha uchun reducer
    contacts: contactReducer,
  },
});
