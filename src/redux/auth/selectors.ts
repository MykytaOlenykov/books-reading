import { RootState } from "redux/store";

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsError = (state: RootState) => state.auth.isError;

export const selectError = (state: RootState) => state.auth.error;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
