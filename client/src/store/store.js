// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => null,
    logoutUser: () => null,
  },
});

export const { setUser, clearUser, logoutUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
