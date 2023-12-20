import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Check if userInfo is existed. If so, assign as initialState userInfo
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        },
    },
});

// * When call it, it's "action"
export const { setCredentials, logout } = authSlice.actions;
// * When change it, it's "reducer"
export default authSlice.reducer;

// * in order to use any slice, bring it to 'store'
