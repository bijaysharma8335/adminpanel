import { createSlice } from "@reduxjs/toolkit";
import { categories } from "./../../constants/categories";

const initialState = {
    categories,
    newCategoryAdded: [],
};
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { setCategory, setCategoryImg, setNewCategory } =
    categorySlice.actions;

export const getCategory = (state) => state.category.category;
export const getNewCategory = (state) => state.category.newCategoryAdded;

export default categorySlice.reducer;
