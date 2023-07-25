import { RootState } from "redux/store";

export const selectStats = (state: RootState) => state.statistics.stats;

export const selectIsAdding = (state: RootState) => state.statistics.isAdding;
