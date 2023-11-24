import { apiSlice } from "./apiSlice";

const USER_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/auth`, // refer to 'authUser' in 'backend/controllers/userController.js'
                method: "POST",
                body: data,
            }),
        }),
    }),
});

// The way to export mutation, use + name + mutation
export const { useLoginMutation } = usersApiSlice;
