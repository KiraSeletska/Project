/*import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3333/'}),
    endpoints: (builder) => ({
        getAllcategories: builder.query({
            query: () => 'categories/all'
        }),
        getOneCategory: builder.query({
            query: (category) => `category/${category}`, 
        }),
        getOneProductById: builder.query({
            query: (id) => `products/${id}`,
        })
    })
})

export const {
    useGetAllCategoriesQuery,
useGetOneCategoryQuery,
useGetOneProductByIdQuery
} = apiSlice;
*/
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "http://127.0.0.1:3333/"

export const apiSlice = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "categories/all",
    }),
    getOneCategory: builder.query({
      query: (id) => `categories/${id}`,
    }),
    getOneProductByCategory: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetOneCategoryQuery,
  useGetOneProductByCategoryQuery,
} = apiSlice;
