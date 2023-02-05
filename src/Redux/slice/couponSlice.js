import { createSlice } from "@reduxjs/toolkit";
import { coupons } from "../../constants/coupons";
const initialState = {
    coupons,
    newCouponAdded: [],
};
const couponSlice = createSlice({
    name: "coupons",
    initialState,
    reducers: {
        setCoupon: (state, action) => {
            state.coupon = action.payload;
        },
        setNewCoupon: (state, action) => {
            const length = 6 + state.newCouponAdded.length;
            state.newCouponAdded = [
                ...state.newCouponAdded,
                { ...state.coupon, id: length },
            ];
        },
    },
});

export const { setCoupon, setNewCoupon } = couponSlice.actions;

export const getCoupon = (state) => state.coupons.coupon;
export const getNewCoupon = (state) => state.coupons.newCouponAdded;

export default couponSlice.reducer;
