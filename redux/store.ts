import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import todoReducer from './features/todoSlice';
import { userApi } from "./services/userApi";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  // middleware for handle async data fetch&caching rtk query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([userApi.middleware])
});

// for refetch on focus enabled
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;