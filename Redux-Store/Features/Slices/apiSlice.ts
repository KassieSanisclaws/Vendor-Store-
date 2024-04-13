import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }); // Base URL for the API [Example]: 'https://pokeapi.co/api/v2/']
const baseQuery = fetchBaseQuery({ baseUrl: "" }); //Because using proxy that baseUrl is empty string.

export const apiSlice = createApi({
      baseQuery,
      tagTypes: ['User', 'Vendor', 'Admin'],
        endpoints: (builder) => ({
            // Add endpoints here
            //User Endpoints
        getUser: builder.query({
        query: () => `user`,
        providesTags: ["User"],
      }),
      //Vendor Endpoints
        getVendor: builder.query({
        query: () => `vendor`,
        providesTags: ["Vendor"],
        }),
        //Admin Endpoints
        getAdmin: builder.query({
        query: () => `admin`,
        providesTags: ["Admin"],
        }),
    }),
});