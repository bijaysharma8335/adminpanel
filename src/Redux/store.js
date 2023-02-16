import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import categoryReducer from "./slice/categorySlice";
import couponReducer from "./slice/couponSlice";
import orderReducer from "./slice/orderSlice";
import customerReducer from "./slice/customerSlice";
import stockReducer from "./slice/stockSlice";
import userReducer from "./slice/userSlice";
import profileReducer from "./slice/profileSlice";
import themeSlice from "./slice/themeSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        categories: categoryReducer,
        coupons: couponReducer,
        orders: orderReducer,
        customers: customerReducer,
        stocks: stockReducer,
        profile: profileReducer,
        theme:themeSlice
    },
});

export default store;
