import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { awsApi } from "@/services/aws";
import imageCacheReducer from "@/app/imageSlice"

export const store = configureStore({
  reducer: {
    [awsApi.reducerPath]: awsApi.reducer,
    imageCache: imageCacheReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(awsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
