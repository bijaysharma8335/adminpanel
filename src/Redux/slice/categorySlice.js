import { createSlice } from "@reduxjs/toolkit";
import { categories } from "./../../constants/categories";

const initialState = {
    categories: categories,
};
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categories.push(action.payload);
        },
    },
});

export const { setCategory, setNewCategory } = categorySlice.actions;

export const getCategories = (state) => state.categories.categories;

export default categorySlice.reducer;
