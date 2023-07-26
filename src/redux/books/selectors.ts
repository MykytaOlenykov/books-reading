import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const selectGoingToRead = (state: RootState) => state.books.goingToRead;

export const selectCurrentlyReading = (state: RootState) =>
  state.books.currentlyReading;

export const selectFinishedReading = (state: RootState) =>
  state.books.finishedReading;

export const selectUpdatedBook = (state: RootState) => state.books.updatedBook;

export const selectError = (state: RootState) => state.books.error;

export const selectIsError = (state: RootState) => state.books.isError;

export const selectIsAdding = (state: RootState) => state.books.isAdding;

export const selectIsDeleting = (state: RootState) => state.books.isDeleting;

export const selectIsFirstVisit = createSelector(
  [selectGoingToRead, selectCurrentlyReading, selectFinishedReading],
  (goingToRead, currentlyReading, finishedReading) =>
    !goingToRead.length && !currentlyReading.length && !finishedReading.length
);
