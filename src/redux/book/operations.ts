import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { RootState, AppDispatch } from "redux/store";
import { api, setApiAuthHeader, clearApiAuthHeader } from "services";
import { LStorage } from "utils";
import { storageKeys, API_URL } from "constants/";

export const addBook = createAsyncThunk<void, void>(
  "book/add",
  async (bookData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("book", bookData);
      console.log(data);
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const deleteBook = createAsyncThunk<void, void>(
  "book/delete",
  async (_, { rejectWithValue }) => {
    try {
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const addBookReview = createAsyncThunk<void, void>(
  "book/addReview",
  async (_, { rejectWithValue }) => {
    try {
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);
