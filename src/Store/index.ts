import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter';
import api from '../Service/index';

export const store = configureStore({
  reducer: {
    counter,
    api: api.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
