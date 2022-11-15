/* eslint-disable @typescript-eslint/no-explicit-any */
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<Response, DataPost>({
    query: (body) => ({
      url: `auth/login`,
      method: 'POST',
      body,
    }),
    transformResponse: (response) => response.data,
  });

type Response = {
  success: boolean;
  message?: string;
  errorCode?: string;
  data?: object;
};

type DataPost = {
  username: string;
  password: string;
};
