import { createSlice } from "@reduxjs/toolkit";
import { Stocks,purchase,department,suppliers } from "../../constants/stocks";

const initialState = {
    Stocks,
    department,
    suppliers,
    purchase,
};

const stockSlice = createSlice({
    name: "Stocks",
    initialState,
    reducers: {},
});

export const {} = stockSlice.actions;

export default stockSlice.reducer;
