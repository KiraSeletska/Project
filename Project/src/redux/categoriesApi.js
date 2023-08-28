import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "http://127.0.0.1:3333/";
// /products/all   - ссылка на все продукты
export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "categories/all",
    }),
    getOneCategory: builder.query({
      query: (id) => `categories/${id}`,
    }),
    getAllPropducts: builder.query({
      query: () => "products/all",
    }),
    getOneProductByCategory: builder.query({
      query: (id) => `products/${id}`,
    }),
    postPhoneNumberForOrder: builder.mutation({
      query: (payload) => ({
        url: "order/send",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    postPhoneNumberForDiscount: builder.mutation({
      query: (payload) => ({
        url: "sale/send",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetOneCategoryQuery,
  useGetAllPropductsQuery,
  useGetOneProductByCategoryQuery,
  usePostPhoneNumberForOrderMutation,
  usePostPhoneNumberForDiscountMutation
} = categoriesApi;
