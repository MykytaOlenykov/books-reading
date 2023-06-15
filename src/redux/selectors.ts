import { RootState } from "redux/store";

export const selectUserData = (state: RootState) => state.user.userData;

export const selectError = (state: RootState) => state.user.error;

export const selectIsRegistered = (state: RootState) => state.user.isRegistered;

export const selectIsLoading = (state: RootState) => state.user.isLoading;

export const selectIsError = (state: RootState) => state.user.isError;

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.user.isRefreshing;
