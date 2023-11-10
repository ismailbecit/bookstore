"use client"
import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  order: {
    count: 0,
    products: []
  }
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.order.count += 1
      state.order.products.push(action.payload)
      localStorage.setItem("order", JSON.stringify(current(state.order)))
      toast.success("Ürün Sepete Eklendi")
    },
    decreaseOrder: (state, action) => {
      state.order.count -= 1
      state.order.products.filter((el) => el.id !== action.payload.id)
    },
    setOrderInitial: (state) => {
      const order = localStorage.getItem("order")
      if (order) {
        state.order = JSON.parse(order)
      }

    },
    resetOrderSlice: (state) => initialState
  },
});
export const { addOrder, decreaseOrder, setOrderInitial, resetOrderSlice } = orderSlice.actions;
export default orderSlice.reducer;