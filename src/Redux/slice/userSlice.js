import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export const getUser = (state) => state.user;
export default userSlice.reducer;
