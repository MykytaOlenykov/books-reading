import { RootState } from "redux/store";

export const selectStats = (state: RootState) => state.statistics.data;

export const selectError = (state: RootState) => state.statistics.error;

export const selectIsError = (state: RootState) => state.statistics.isError;

export const selectIsAdding = (state: RootState) => state.statistics.isAdding;
