import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    age: 0,
    email: "",
};

export const userSlice = createSlice({
    // here will contain all the information about
    // the reducer,
    // the actions we want to take on the state
    // and the actusl name of the state

    // need : name of the slice which is the same thing as the name of the state
    name: "user",
    // need : 'initialState' for the initial value
    initialState: {
        value: initialStateValue,
    },
    // reducers --> functions
    reducers: {
        login: (
            state, // state holds the information about current and previous value of the state
            action // contains payload and type
        ) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions; // so we can have access to these values

export default userSlice.reducer;
