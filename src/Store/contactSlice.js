import { createSlice } from "@reduxjs/toolkit";

// localStorage’dan avvalgi holatni olish
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("contacts");
    if (serializedState === null) {
      return { contacts: [] };
    }
    const parsedState = JSON.parse(serializedState);
    // Agar parsedState.contacts massiv bo‘lmasa, bo‘sh massiv qaytaramiz
    return {
      contacts: Array.isArray(parsedState.contacts) ? parsedState.contacts : [],
    };
  } catch (e) {
    console.error("localStorage’dan yuklashda xato:", e);
    return { contacts: [] };
  }
};

// localStorage’ga saqlash
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("contacts", serializedState);
  } catch (e) {
    console.error("localStorage’ga saqlashda xato:", e);
  }
};

const initialState = loadStateFromLocalStorage();

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      const newContact = {
        ...action.payload,
        timestamp: new Date().toISOString(),
      };
      state.contacts.push(newContact); // Endi xatosiz ishlaydi
      saveStateToLocalStorage(state);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
