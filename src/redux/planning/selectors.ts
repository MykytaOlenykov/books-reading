import { RootState } from "redux/store";

export const selectStartDate = (state: RootState) =>
  state.planning.data.startDate;

export const selectEndDate = (state: RootState) => state.planning.data.endDate;

export const selectBooks = (state: RootState) => state.planning.data.books;

export const selectStatus = (state: RootState) => state.planning.data.status;

export const selectFinishedBooks = (state: RootState) =>
  state.planning.finishedBooks;

export const selectError = (state: RootState) => state.planning.error;

export const selectIsError = (state: RootState) => state.planning.isError;

export const selectIsAdding = (state: RootState) => state.planning.isAdding;

export const selectIsLoading = (state: RootState) => state.planning.isLoading;
