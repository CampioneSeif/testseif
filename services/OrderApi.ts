import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order, OrdersResponse, OrdersQueryParams } from "@/types/order";
import { storage } from "@/lib/storage";

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface AcceptOrderResponse {
  success: boolean;
  message: string;
  order: Order;
}

export interface CancelOrderResponse {
  success: boolean;
  message: string;
  order: Order;
}

export const OrderApi = createApi({
  reducerPath: "orderApi",
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
  tagTypes: ["Orders"],
  endpoints: (builder) => ({ 
    // Get order by ID
    getOrderById: builder.query<Order, string>({
      query: (orderId) => `/shop-client/orders/shop/${orderId}`,
      providesTags: (result, error, orderId) => [{ type: "Orders", id: orderId }],
    }),

    // Get all orders with infinite query
    getAllOrders: builder.infiniteQuery<
      OrdersResponse,
      OrdersQueryParams,
      { page: number; limit: number }
    >({
      infiniteQueryOptions: {
        initialPageParam: { page: 1, limit: 10 },
        getNextPageParam: (lastPage, _allPages, lastPageParam) => {
          if (lastPage.pagination.page >= lastPage.pagination.totalPages) {
            return undefined;
          }
          return {
            ...lastPageParam,
            page: lastPageParam.page + 1,
          };
        },
      },
      query: ({ pageParam, queryArg }) => {
        return {
          url: '/shop-client/organization/orders',
          method: 'GET',
          params: {
            roleCode: 'SHOP',
            page: pageParam.page,
            limit: pageParam.limit,
            ...(queryArg?.search && { search: queryArg.search }),
            ...(queryArg?.status && { status: queryArg.status }),
          },
        };
      },
      providesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetOrderByIdQuery,
  useGetAllOrdersInfiniteQuery,
} = OrderApi;
