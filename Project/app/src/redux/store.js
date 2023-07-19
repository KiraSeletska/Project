import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (
    getDefaultMiddleware //возьмет дефолтный Middleware и доавть sliceApi.middleware
  ) => getDefaultMiddleware().concat(apiSlice.middleware),
});
