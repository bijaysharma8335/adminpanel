import { createSlice } from "@reduxjs/toolkit";
import { orders } from "./../../constants/orders";

const initialState = { orders, newOrders: [] };
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { setCategory, setCategoryImg } = orderSlice.actions;

export const getOrder = (state) => state.order.Order;

export default orderSlice.reducer;
