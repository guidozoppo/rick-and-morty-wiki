import { configureStore } from '@reduxjs/toolkit';
import { personajesApi } from '../redux/api/personajes';
import { episodesApi } from '../redux/api/episodes';
import { locationApi } from '../redux/api/location';

export const store = configureStore({
  reducer: {
    [personajesApi.reducerPath]: personajesApi.reducer,
    [episodesApi.reducerPath]: episodesApi.reducer,    
    [locationApi.reducerPath]: locationApi.reducer,    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(personajesApi.middleware, episodesApi.middleware, locationApi.middleware),
});
