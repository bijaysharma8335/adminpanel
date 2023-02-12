import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Bijay",
    name: "Bijay Sharma",
    password: "1234567890",
    cmpName: "Morgan",
    address: "SahakarNagar,Bangalore,Karnataka,560092",
    mobile: "9897661456",
    altMobile: "7892618561",
    email: "xyz@gmail.com",
    country: "",
    state: "",
    city: "",
    pinCode: "1421 ",
    profileImg:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
    details:
        "Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed tristique scelerisque arcu id dignissim.",
    birthDate: "1996-06-23",
};

const profileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            const result = action.payload;
            return result;
        },
    },
});

export const { setProfile } = profileSlice.actions;
export const getProfile = (state) => state.profile;
export default profileSlice.reducer;
