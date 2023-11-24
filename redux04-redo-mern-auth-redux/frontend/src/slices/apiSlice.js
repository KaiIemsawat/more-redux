import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "", // empty string since proxy was set in 'vite.config.js'
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User"],
    endpoints: (builder) => ({}),
});
