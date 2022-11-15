import api from '../index';
import getListMovies from './getListMovies';

export const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getListMovies: getListMovies(build),
  }),
  overrideExisting: false,
});

export const { useLazyGetListMoviesQuery } = moviesApi;
