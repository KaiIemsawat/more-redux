import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Learning RTK",
        content:
            "Practice wouldn't make perfect, make less mistake. And that's good",
    },
    {
        id: "2",
        title: "Slices, Action and Reducer",
        content: "Parts of Redux. They are the cores",
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
    },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
