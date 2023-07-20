import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "./operations";
import { IBook, IError, IFetchBooksResponse } from "types";

export interface IInitialState {
  goingToRead: IBook[];
  currentlyReading: IBook[];
  finishedReading: IBook[];
  error: IError | undefined;
  isError: boolean;
  isAdding: boolean;
  isDeleting: string[];
}

const initialState: IInitialState = {
  goingToRead: [],
  currentlyReading: [],
  finishedReading: [],
  error: { message: null, status: null, type: null },
  isError: false,
  isAdding: false,
  isDeleting: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IFetchBooksResponse>) => {
      state.goingToRead = action.payload.goingToRead;
      state.currentlyReading = action.payload.currentlyReading;
      state.finishedReading = action.payload.finishedReading;
    },
    clearError: (state) => {
      state.error = { message: null, status: null, type: null };
      state.isError = false;
    },
    clearData: (state) => {
      state.goingToRead = [];
      state.currentlyReading = [];
      state.finishedReading = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.goingToRead = [...state.goingToRead, action.payload];
        state.isAdding = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isAdding = true;
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isAdding = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const idx = state.isDeleting.findIndex(
          (bookId) => bookId === action.payload
        );
        state.isDeleting.splice(idx, 1);
        state.goingToRead = state.goingToRead.filter(
          ({ _id }) => _id !== action.payload
        );
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.isDeleting.push(action.meta.arg);
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(deleteBook.rejected, (state, action) => {
        const idx = state.isDeleting.findIndex(
          (bookId) => bookId === action.meta.arg
        );
        state.isDeleting.splice(idx, 1);
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { setBooks, clearError, clearData } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
