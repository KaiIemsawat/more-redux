import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Note that the name is different

const store = configureStore({
    reducer: {
        auth: authReducer, // nameOfState: reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});

export default store;
