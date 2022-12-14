import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from 'Service/Auth/index';
import { moviesApi } from 'Service/Movies/index';
import counter from './Counter';
import api from '../Service/index';

export const store = configureStore({
  reducer: {
    api: api.reducer,
    counter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, moviesApi.middleware]),
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
