import { configureStore } from "@reduxjs/toolkit";
import upload from "./features/uploadDocs";
import chat from "./features/chatSlice"

export const store = configureStore({
  reducer: {
    upload:upload,
    chat:chat,

  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Types (VERY IMPORTANT for TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;