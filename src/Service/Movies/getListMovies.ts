/* eslint-disable @typescript-eslint/no-explicit-any */
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Response, null>({
    query: () => `movies/list`,
  });

type Response = {
  success: boolean;
  message?: string;
  errorCode?: string;
  data?: object;
};
