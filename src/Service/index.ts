import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://clon-app.herokuapp.com',
  timeout: 6000,
  prepareHeaders: (headers, { getState }) => {
    const token = '';
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }
  return result;
};

export default createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
