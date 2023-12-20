import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
    // create endpoint and inject to endpoints in 'apiSlice.js'
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`, // refers to authUser in userController.js in backend
                method: "POST",
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
            }),
        }),
    }),
});

// Convention way of export
// use + Name + Mutation
export const { useLoginMutation, useLogoutMutation } = userApiSlice;
