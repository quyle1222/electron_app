import api from '../index';
import postLogin from './postLogin';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchOne: postLogin(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchOneQuery } = userApi;
