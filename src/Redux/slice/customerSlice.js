import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    customer: {
        orderId: "",
        name: "",
        profileImg: "",
        country: "",
        registerDate: "",
        email: "",
        phone: "",
        order: "",
    },
};
const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        setCustomer: (_, action) => {
            return action.payload;
        },
    },
});

export const { setCustomer } = customerSlice.actions;

export const getCustomer = (state) => state.customers.customer;

export default customerSlice.reducer;
