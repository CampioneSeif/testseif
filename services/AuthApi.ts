import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, User } from "../types/user";
import { storage } from "../lib/storage";

// Response type for verifyUser endpoint (returns actual user data)


export const api = createApi({
  reducerPath: "authSlice",
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
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<
      AuthResponse,
      { phone: string; roleCode: string }
    >({
      query: (body) => ({
        url: "/auth/otp/request",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation<
      AuthResponse,
      { phone: string; code: string; roleCode: string }
    >({
      query: (body) => ({
        url: "/auth/otp/verify",
        method: "POST",
        body,
      }),
    }),
    verifyUser: builder.query<User, void>({
      query: () => "/users/me",
    }),
    completeProfile: builder.mutation<AuthResponse, FormData>({
      query: (formData) => ({
        url: "/auth/profile/complete-shop",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyOtpMutation,
  useVerifyUserQuery,
  useCompleteProfileMutation,
} = api;
