import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { fetchBooks } from "redux/books/operations";
import { setBooks } from "redux/books/slice";
import { AppDispatch } from "redux/store";
import {
  $api,
  setApiAuthHeader,
  clearApiAuthHeader,
  $refreshApi,
} from "services";
import { errorObjectCreator } from "utils";
import { storageKeys } from "constants/";
import { IAuthRequest, IAuthResponse, IRefreshResponse, IUser } from "types";

export const register = createAsyncThunk<NonNullable<IUser>, IAuthRequest>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await $api.post<NonNullable<IUser>>(
        "api/users/register",
        credentials
      );

      return data;
    } catch (error) {
      return rejectWithValue(errorObjectCreator({ error }));
    }
  }
);

export const logIn = createAsyncThunk<
  IAuthResponse["userData"],
  Omit<IAuthRequest, "name">,
  { dispatch: AppDispatch }
>("auth/logIn", async (credentials, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await $api.post<IAuthResponse>(
      "api/users/login",
      credentials
    );

    localStorage.setItem(
      storageKeys.REFRESH_TOKEN_KEY_LS,
      JSON.stringify(data.refreshToken)
    );

    setApiAuthHeader(data.accessToken);

    const books = await fetchBooks();

    dispatch(setBooks(books));

    return data.userData;
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

export const logOut = createAsyncThunk<void, void>(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await $api.post("api/users/logout");

      localStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY_LS);

      clearApiAuthHeader();
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

export const refreshUser = createAsyncThunk<
  IAuthResponse["userData"],
  void,
  { dispatch: AppDispatch }
>("auth/refresh", async (_, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await $refreshApi.post<IRefreshResponse>(
      "api/users/refresh"
    );

    localStorage.setItem(
      storageKeys.REFRESH_TOKEN_KEY_LS,
      JSON.stringify(data.refreshToken)
    );

    setApiAuthHeader(data.accessToken);

    const { data: userData } = await $api.get<IAuthResponse["userData"]>(
      "api/users/current"
    );

    const books = await fetchBooks();

    dispatch(setBooks(books));

    return userData;
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
