import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "redux/auth/slice";
import { booksReducer } from "./books/slice";
import { planningReducer } from "./planning/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    planning: planningReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
