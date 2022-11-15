import api from '../index';
import postLogin from './postLogin';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: postLogin(build),
  }),
  overrideExisting: false,
});

export const { useLazyPostLoginQuery } = userApi;
