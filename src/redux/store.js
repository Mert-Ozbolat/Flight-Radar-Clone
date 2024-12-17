import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";

const store = configureStore({
    reducer: { flight: flightReducer },
});
export default store;