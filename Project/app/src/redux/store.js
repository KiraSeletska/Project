import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>//возбмт дефщдтный Middleware и доавть sliceApi.middleware
    getDefaultMiddleware().concat(apiSlice.middleware),
});