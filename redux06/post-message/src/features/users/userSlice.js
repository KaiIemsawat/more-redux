import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Zukkii" },
    { id: "1", name: "Titan" },
    { id: "2", name: "Kin kin" },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
