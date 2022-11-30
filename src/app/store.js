import { configureStore } from '@reduxjs/toolkit';
import { personajesApi } from '../redux/api/personajes';
import { episodesApi } from '../redux/api/episodes';

export const store = configureStore({
  reducer: {
    [personajesApi.reducerPath]: personajesApi.reducer,
    [episodesApi.reducerPath]: episodesApi.reducer,    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(personajesApi.middleware, episodesApi.middleware),
});
