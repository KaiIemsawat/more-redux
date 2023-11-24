import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            // set 'userInfo' with 'action.payload' value
            state.userInfo = action.payload;
            // add item 'userInfo' into 'localStorage'
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            // set 'userInfo' to null
            state.userInfo = null;
            localStorage.removeItem("userInfo");
            // remove 'userInfo' item
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
