import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Note that the name is different
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        auth: authReducer, // nameOfState: reducer
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});

export default store;
