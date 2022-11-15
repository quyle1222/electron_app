export default (build: {
  query: (arg0: { query: (id: any) => string }) => any;
}) =>
  build.query({
    query: (id) => `/users/${id}`,
  });
