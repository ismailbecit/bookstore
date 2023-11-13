import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { orderTotalControl } from "@/utils/utils";
import { IBasket } from "@/redux/models/basket";

const initialState = {
  order: {
    count: 0,
    total: 0,
    products: [] as IBasket[],
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { order } = state;
      order.count += 1;
      const existingProduct = order.products.find((el) => el.id === action.payload?.id);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        order.products.push(action.payload);
      }
      order.total = orderTotalControl(order.products);
      localStorage.setItem("order", JSON.stringify(order));
      toast.success("Ürün Sepete Eklendi");
    },
    decreaseOrder: (state, action) => {
      const { order } = state;
      order.count -= 1;
      order.products = order.products.filter((el) => el.id !== action.payload.id);
    },
    setOrderInitial: (state) => {
      const order = localStorage.getItem("order");
      if (order) {
        state.order = JSON.parse(order);
      }
    },
    orderIncrease: (state, action) => {
      const { order } = state;
      const orderIndex = order.products.findIndex((el) => el.id === action.payload);
      order.products[orderIndex].qty += 1;
      order.count += 1;
      order.total = orderTotalControl(current(order)?.products);
      localStorage.setItem("order", JSON.stringify(current(order)));
    },
    orderDecrease: (state, action) => {
      const { order } = state;
      const orderIndex = order.products.findIndex((el) => el.id === action.payload);
      const orderItem = order.products[orderIndex];
      if (orderItem.qty === 1) {
        order.products = order.products.filter((el) => el.id !== action.payload);
        order.count -= 1;
      } else {
        orderItem.qty -= 1;
        order.count -= 1;
      }
      order.total = orderTotalControl(current(order)?.products);
      localStorage.setItem("order", JSON.stringify(current(order)));
    },
    removeBasketItem: (state, action) => {
      const { order } = state;
      const orderIndex = order.products.findIndex((el) => el.id === action.payload);
      const orderItem = order.products[orderIndex];
      order.products = order.products.filter((el) => el.id !== action.payload);
      order.count -= orderItem.qty;
      order.total = orderTotalControl(current(order)?.products);
      localStorage.setItem("order", JSON.stringify(current(order)));
    },
    resetOrderSlice: (state) => {
      state.order = initialState.order;
      localStorage.setItem("order", JSON.stringify(initialState.order));
    },
  },
});

export const { addOrder, decreaseOrder, setOrderInitial, resetOrderSlice, orderIncrease, orderDecrease, removeBasketItem } = orderSlice.actions;

export default orderSlice.reducer;
