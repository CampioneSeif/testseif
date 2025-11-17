import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { storage } from '@/lib/storage';
import { PromotionsQueryParams, PromotionsResponse, RANDOM_IMAGES } from '@/types/promotion';
import { ShopSubscriptionsResponse, ShopSubscriptionItem, RawServerItem } from '@/types/api';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

export const PromotionApi = createApi({
  reducerPath: 'promotionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers) => {
      const token = await storage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Promotions'],
  endpoints: (builder) => ({
    // Get all promotions with infinite query
    getAllPromotions: builder.infiniteQuery<
      PromotionsResponse,
      PromotionsQueryParams,
      { page: number; limit: number }
    >({
      infiniteQueryOptions: {
        initialPageParam: { page: 1, limit: 4 },
        getNextPageParam: (lastPage, _allPages, lastPageParam) => {
          if (lastPage.page >= lastPage.totalPages) {
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
          url: '/promotions/filters',
          method: 'GET',
          params: {
            page: pageParam.page,
            limit: pageParam.limit,
            ...(queryArg?.search && { search: queryArg.search }),
            ...(queryArg?.category_code && { category_code: queryArg.category_code }),
          },
        };
      },
      providesTags: [{ type: 'Promotions', id: 'LIST' }],
    }),

    // Get all my promotions from server (pure server data with infinite scroll)
    getAllMyPromotions: builder.infiniteQuery<
      ShopSubscriptionsResponse,
      { search?: string; status?: string },
      { page: number; limit: number; search?: string; status?: string }
    >({
      infiniteQueryOptions: {
        initialPageParam: { page: 1, limit: 5 },
        getNextPageParam: (lastPage, _allPages, lastPageParam) => {
          if (!lastPage.hasMore || lastPage.page >= lastPage.totalPages) {
            return undefined;
          }
          return { ...lastPageParam, page: lastPageParam.page + 1 };
        },
      },
      async queryFn(arg: { pageParam?: { page: number; limit: number }; queryArg?: { search?: string; status?: string } }, api, _extra, baseQuery) {
        try {
          const currentPage = arg?.pageParam?.page ?? 1;
          const limit = arg?.pageParam?.limit ?? 5;
          
          // Get search and status from the query arguments
          const queryArgs = arg.queryArg || {};
          const search = queryArgs.search;
          const status = queryArgs.status;

          // Build query params
          const params: Record<string, string | number> = { page: currentPage, limit };
          if (search) params.search = search;
          if (status) params.status = status;

          // Fetch directly from server
          const result = await baseQuery({
            url: '/shop-subscriptions/shop',
            method: 'GET',
            params,
          });

          if (result.error) {
            return { error: result.error as FetchBaseQueryError };
          }

          const apiData = (result.data as ShopSubscriptionsResponse) || {} as ShopSubscriptionsResponse;
          const items = Array.isArray(apiData.data) ? apiData.data : [];
          const page = apiData.pagination?.page ?? apiData.page ?? currentPage;
          const totalPages = apiData.pagination?.totalPages ?? apiData.totalPages ?? 1;
          const hasMore = page < totalPages;

          // Map server items to consistent format
          const serverData: ShopSubscriptionItem[] = items.map((it: RawServerItem): ShopSubscriptionItem => ({
            id: it.id || '',
            createdAt: it.createdAt ?? new Date().toISOString(),
            updatedAt: it.updatedAt ?? new Date().toISOString(),
            status: (it.status as ShopSubscriptionItem['status']) ?? 'pending',
            promoName: it.promoName || '',
            promoPrice: String(it.promoPrice || ''),
            promoDiscount: String(it.promoDiscount || ''),
            promoImage: String(it.promoImage ?? ''),
            originalPrice: Number(it.originalPrice ?? 0),
            discountedPrice: Number(it.discountedPrice ?? 0),
            savings: Number(it.savings ?? 0),
            brandLogo: it.brandLogo ?? undefined,
            promotionId: (it.promotionId ?? it.id) || '',
            formData: {
              dateStock: it.formData?.dateStock
                ? new Date(it.formData.dateStock).toLocaleDateString('fr-FR') // => jj/mm/yyyy
                : '',
              quantite: it.formData?.quantite || 1,
              conditionnement: it.formData?.conditionnement || '',
              files: it.formData?.files || [],
            },
          }));

          return {
            data: {
              data: serverData,
              page: currentPage,
              totalPages,
              limit,
              hasMore,
            } as ShopSubscriptionsResponse,
          };
        } catch (e) {
          return { error: { status: 'CUSTOM_ERROR', data: String(e) } as FetchBaseQueryError };
        }
      },
      providesTags: [{ type: 'Promotions', id: 'LIST' }],
    }),

    // Create shop subscription
    createShopSubscription: builder.mutation<{ success: boolean; message?: string }, FormData>({
      query: (formData) => ({
        url: '/shop-subscriptions/full',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Promotions', id: 'LIST' }],
    }),

  }),
});

export const {
  useGetAllPromotionsInfiniteQuery,
  useGetAllMyPromotionsInfiniteQuery,
  useCreateShopSubscriptionMutation,
} = PromotionApi;

// Helper function to get random image
export const getRandomImage = () => {
  return RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)];
};
