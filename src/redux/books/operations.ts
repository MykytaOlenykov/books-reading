import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { api } from "services";
import { IBook, IFetchBooksResponse } from "types";

export const fetchBooks = createAsyncThunk<IFetchBooksResponse, void>(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get<IFetchBooksResponse>("api/books");

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue({
          message: error.message,
          status: error.response?.status,
        });
      }

      return rejectWithValue({
        message: "Server Error",
        status: 500,
      });
    }
  }
);

export const addBook = createAsyncThunk<
  IBook,
  Omit<IBook, "_id" | "pagesFinished">
>("books/addBook", async (data, { rejectWithValue }) => {
  try {
    const { data: newBook } = await api.post<IBook>("api/books", data);

    return newBook;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }

    return rejectWithValue({
      message: "Server Error",
      status: 500,
    });
  }
});
