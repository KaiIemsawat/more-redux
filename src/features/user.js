import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // here will contain all the information about
    // the reducer,
    // the actions we want to take on the state
    // and the actusl name of the state

    // name of the slice which is the same thing as the name of the state
    name: "user",
    // need 'initialState'
    initialState: {
        value: {
            name: "",
            age: 0,
            email: "",
        },
    },
    // reducers --> functions
    reducers: {
        login: (
            state, // state holds the information about current and previous value of the state
            action // contains payload and type
        ) => {
            state.value = action.payload;
        },
    },
});

export default userSlice.reducer;
