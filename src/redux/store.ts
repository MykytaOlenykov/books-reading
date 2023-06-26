import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "redux/auth/slice";
import { booksReducer } from "./books/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
