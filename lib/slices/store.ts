import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/services/AuthApi";
import { ActivitiesApi } from "@/services/ActivitiesApi";
import { CategoryApi } from "@/services/CategoryApi";
import { DraftApi } from "@/services/DraftApi";
import { OrderApi } from "@/services/OrderApi";
import { PromotionApi } from "@/services/PromotionApi";
import authReducer from "@/lib/slices/authSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [ActivitiesApi.reducerPath]: ActivitiesApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [DraftApi.reducerPath]: DraftApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    [PromotionApi.reducerPath]: PromotionApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      api.middleware,
      ActivitiesApi.middleware,
      CategoryApi.middleware,
      DraftApi.middleware,
      OrderApi.middleware,
      PromotionApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
