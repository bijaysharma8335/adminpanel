import { createSlice } from "@reduxjs/toolkit";
import { products } from "./../../constants/products";

const initialState = {
    products,
    newProducts: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
