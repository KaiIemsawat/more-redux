import { createSlice } from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        photos: [],
        isLoading: false,
    },
});
