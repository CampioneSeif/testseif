import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Activity } from "../types/user";
import { storage } from "../lib/storage";

// Response type for verifyUser endpoint (returns actual user data)


export const ActivitiesApi = createApi({
  reducerPath: "activitiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL || "http://192.168.1.22:3000",
    prepareHeaders: async (headers) => {
      const token = await storage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Activities"],
  endpoints: (builder) => ({
    GetActivities: builder.query<
      Activity[],
      void
    >({
      query: () => ({
        url: "/sectors",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetActivitiesQuery,
} = ActivitiesApi;
