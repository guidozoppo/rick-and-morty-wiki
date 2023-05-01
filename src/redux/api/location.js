import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/location' }),
    endpoints: (builder) => ({
        fetchLocation: builder.query({
            query: ({ id }) => ({
                url: `/${id}`,
                method: 'GET',
            })
        })
    })
});

export const { useFetchLocationQuery } = locationApi;