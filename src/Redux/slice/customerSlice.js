import { createSlice } from "@reduxjs/toolkit";
import { customers } from "../../constants/customers";
const initialState = {
    customers,
    newCustomers: [],
};
const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            state.customer = action.payload;
        },
    },
});

export const { setCustomer } = customerSlice.actions;

export const getCustomer = (state) => state.customers.customer;

export default customerSlice.reducer;
