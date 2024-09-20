import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slice/cartslice";
import checkoutSlice from "./slice/checkoutSlice";
import onBoardingSlice from "./slice/onBoardingSlice";
export const store=configureStore({
    reducer:{
        cart:cartslice,
        checkout:checkoutSlice,
        onboarding:onBoardingSlice
    }
})