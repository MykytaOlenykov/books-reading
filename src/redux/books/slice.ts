import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks, addBook, deleteBook } from "./operations";
import { IBook, IError, IFetchBooksResponse } from "types";

export interface IInitialState {
  goingToRead: IBook[];
  currentlyReading: IBook[];
  finishedReading: IBook[];
  error: IError;
  isError: boolean;
  isAdding: boolean;
}

const initialState: IInitialState = {
  goingToRead: [],
  currentlyReading: [],
  finishedReading: [],
  error: { message: null, status: null },
  isError: false,
  isAdding: false,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = { message: null, status: null };
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<IFetchBooksResponse>) => {
          state.goingToRead = action.payload.goingToRead;
          state.currentlyReading = action.payload.currentlyReading;
          state.finishedReading = action.payload.finishedReading;
        }
      )
      .addCase(fetchBooks.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null };
      })
      .addCase(fetchBooks.rejected, (state, action: AnyAction) => {
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action: PayloadAction<IBook>) => {
        state.goingToRead = [...state.goingToRead, action.payload];
        state.isAdding = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isAdding = true;
        state.isError = false;
        state.error = { message: null, status: null };
      })
      .addCase(addBook.rejected, (state, action: AnyAction) => {
        state.isAdding = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action: PayloadAction<string>) => {
        state.goingToRead = state.goingToRead.filter(
          ({ _id }) => _id !== action.payload
        );
      })
      .addCase(deleteBook.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null };
      })
      .addCase(deleteBook.rejected, (state, action: AnyAction) => {
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { clearError } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;