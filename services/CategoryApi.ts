import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { storage } from "@/lib/storage";
import { Category } from "@/types/categorie";

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';


export const CategoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
    prepareHeaders: async (headers) => {
      const token = await storage.getItem("token");
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({ 
    // Get all categories for shop
    getShopCategories: builder.query<Category[], void>({
      query: () => ({
        url: '/categories/shop',
        method: 'GET',
      }),
      providesTags: [{ type: "Categories", id: "LIST" }],
    }),
  }),
});

export const {
  useGetShopCategoriesQuery,
} = CategoryApi;
