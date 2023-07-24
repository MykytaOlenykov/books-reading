import { RootState } from "redux/store";

export const selectStats = (state: RootState) => state.statistics.stats;

export const selectIsLoading = (state: RootState) => state.statistics.isLoading;

export const selectIsAdding = (state: RootState) => state.statistics.isAdding;

export const selectIsSentReq = (state: RootState) => state.statistics.isSentReq;
