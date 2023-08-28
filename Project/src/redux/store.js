import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./categoriesApi";
import { basketSlice } from "./basketSlice";

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (
    getDefaultMiddleware //возьмет дефолтный Middleware и доавть sliceApi.middleware
  ) => getDefaultMiddleware().concat(categoriesApi.middleware),
});
