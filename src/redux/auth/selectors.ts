import { RootState } from "redux/store";

export const selectUserData = (state: RootState) => state.auth.userData;

export const selectError = (state: RootState) => state.auth.error;

export const selectIsRegistered = (state: RootState) => state.auth.isRegistered;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsError = (state: RootState) => state.auth.isError;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
