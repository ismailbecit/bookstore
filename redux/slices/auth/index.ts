"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    surname: "",
    password: "",
    isAuth: false
  },
  authToggle: false,
  status: "idle"
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const user = { ...action.payload, isAuth: true }
      state.user = user
      state.status = "success"
      localStorage.setItem("user", JSON.stringify(user))

    },
    setAuthToggle: (state, action) => {
      state.authToggle = action.payload
    },
    setAuthInitial: (state) => {
      const user = localStorage.getItem("user")
      if (user) {
        state.user = JSON.parse(user)
      }
    },
    resetAuthStatus: (state) => {
      state.status = "idle"
    },
    resetAuthSlice: (state) => initialState
  },
});

export const { register, setAuthToggle, setAuthInitial, resetAuthSlice, resetAuthStatus } = authSlice.actions;
export default authSlice.reducer;