import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const personajesApi = createApi( {
    reducerPath: 'personajesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character'}),
    endpoints: (builder) => ({
        fetchPersonajes: builder.query({
            query: ({currentPage, search, status, species, gender, id}) => ({
                url: `${id===undefined ? "" : `/${id}`}/?page=${currentPage===undefined ? "" : currentPage}&name=${search===undefined ? search="" : search}&status=${status===undefined ? "" : status}&species=${species===undefined ? species="" : species}&gender=${gender===undefined ? "" : gender}`,
                method: 'GET',
            })
        })
    })
});

export const { useFetchPersonajesQuery } = personajesApi;