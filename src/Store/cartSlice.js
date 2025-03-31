import { createSlice } from "@reduxjs/toolkit";

// localStorage’dan avvalgi holatni olish
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [], totalQuantity: 0, totalPrice: 0 };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("localStorage’dan yuklashda xato:", e);
    return { items: [], totalQuantity: 0, totalPrice: 0 };
  }
};

// localStorage’ga saqlash
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("localStorage’ga saqlashda xato:", e);
  }
};

const initialState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = Number(
          (existingItem.totalPrice + newItem.price).toFixed(2)
        );
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: Number(newItem.price.toFixed(2)),
        });
      }
      state.totalQuantity += 1;
      state.totalPrice = Number((state.totalPrice + newItem.price).toFixed(2));
      saveStateToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice = Number(
          (state.totalPrice - existingItem.totalPrice).toFixed(2)
        );
        state.items = state.items.filter((item) => item.id !== id);
      }
      saveStateToLocalStorage(state);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        const pricePerUnit = existingItem.totalPrice / existingItem.quantity;
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice = Number(
          (
            state.totalPrice +
            (quantity - existingItem.quantity) * pricePerUnit
          ).toFixed(2)
        );
        existingItem.quantity = quantity;
        existingItem.totalPrice = Number((quantity * pricePerUnit).toFixed(2));
      }
      saveStateToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveStateToLocalStorage(state); // Savatcha tozalanib, localStorage ham yangilanadi
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
