import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import dietplanReducer from "./dietplanSlice";
import paymentReducer from "./paymentSlice";
import mealReducer from "./mealSlice";
import { mijneetApi } from './api';




const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    dietplan: dietplanReducer,
    payment: paymentReducer,
    meal: mealReducer,
    [mijneetApi.reducerPath]: mijneetApi.reducer,
});

export default rootReducer;