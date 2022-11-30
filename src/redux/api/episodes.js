import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const episodesApi = createApi( {
    reducerPath: 'episodesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/episode'}),
    endpoints: (builder) => ({
        fetchEpisodes: builder.query({
            query: ({id}) => ({
                url: `/${id}`,
                method: 'GET',
            })
        })
    })
});

export const { useFetchEpisodesQuery } = episodesApi;