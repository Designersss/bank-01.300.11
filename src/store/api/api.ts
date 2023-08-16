import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "../../utils/env.ts";
import {IUser} from "../../types/user-types.ts";


export const api = createApi({
    reducerPath: 'users',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], object>({
            query: () => '/user',
            providesTags: () => [{
                type: 'Users'
            }]
        }),
        createUser: builder.mutation({
            query: (recipe) => ({
                url: '/user',
                method: 'POST',
                body: recipe
            }),
            invalidatesTags: () => [{
                type: 'Users'
            }]
        })
    })
})

export const {useGetUsersQuery, useCreateUserMutation} = api