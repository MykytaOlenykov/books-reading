import { RootState } from "redux/store";

export const selectGoingToRead = (state: RootState) => state.books.goingToRead;

export const selectCurrentlyReading = (state: RootState) =>
  state.books.currentlyReading;

export const selectFinishedReading = (state: RootState) =>
  state.books.finishedReading;

export const selectError = (state: RootState) => state.books.error;

export const selectIsError = (state: RootState) => state.books.isError;

export const selectIsLoading = (state: RootState) => state.books.isLoading;

export const selectIsAdding = (state: RootState) => state.books.isAdding;
