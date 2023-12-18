import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // initialState will check local storage
    userInfo: localStorage.getItem("userInfo")
        ? // if there is 'userInfo', convert to json and use it
          JSON.parse(localStorage.getItem("userInfo"))
        : // else 'null'
          null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        // Clear credential from local storage on frontend
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
// this logout will also be used in 'Header.jsx'

export default authSlice.reducer;

// Not confirm these concepts!!
// What we call is action
// What we change is reducer

// Then, in order to use any slice, we need to bring it to store. 'store.js', in this case
