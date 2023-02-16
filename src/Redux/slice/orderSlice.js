import { createSlice } from "@reduxjs/toolkit";

import { orders } from "./../../constants/orders";

const initialState = { orders };
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.orders = action.payload;
        },
    },
});

export const { setOrder } = orderSlice.actions;

export const getOrder = (state) => state.orders.orders;

export default orderSlice.reducer;
