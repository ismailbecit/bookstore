"use client"
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./slices/auth";
import orderReducer from "./slices/order";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;