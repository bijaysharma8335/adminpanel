import { createSlice } from "@reduxjs/toolkit";

const initialState = { themeColor: "#1A97F5", backgroundColor: "light" };

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThemeColor: (state, action) => {
            state.themeColor = action.payload;
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
    },
});

export const { setThemeColor, setBackgroundColor } = themeSlice.actions;

export const getThemeColor = (state) => state.theme.themeColor;
export const getBackgroundColor = (state) => state.theme.backgroundColor;

export default themeSlice.reducer;
