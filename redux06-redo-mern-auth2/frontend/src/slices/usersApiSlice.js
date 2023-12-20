import { apiSlice } from "./apiSlice";

const USER_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
    // create endpoint and inject to endpoints in 'apiSlice.js'
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/auth`, // refers to authUser in userController.js in backend
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// Convention way of export
// use + Name + Mutation
export const { useLoginMutation } = userApiSlice;
