import api from '../index';
import postLogin from './postLogin';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: postLogin(build),
  }),
  overrideExisting: false,
});

export const { usePostLoginMutation } = authApi;
