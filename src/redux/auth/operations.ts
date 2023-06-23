import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { AppDispatch, RootState } from "redux/store";
import {
  api,
  setApiAuthHeader,
  clearApiAuthHeader,
  refreshApi,
  setRefreshApiAuthHeader,
} from "services";
import { setTokens } from "utils";
import { IAuthRequest, IAuthResponse, IRefreshResponse, IUser } from "types";

export const register = createAsyncThunk<NonNullable<IUser>, IAuthRequest>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post<NonNullable<IUser>>(
        "api/users/register",
        credentials
      );

      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const logIn = createAsyncThunk<
  IAuthResponse,
  Omit<IAuthRequest, "name">
>("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.post<IAuthResponse>(
      "api/users/login",
      credentials
    );

    setApiAuthHeader(data.accessToken);
    return data;
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return rejectWithValue({
      message: error.message,
      status: error.response?.status,
    });
  }
});

export const logOut = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  "auth/logOut",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await api.post("api/users/logout");

      setTokens(dispatch);
      clearApiAuthHeader();
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const refreshUser = createAsyncThunk<
  IRefreshResponse,
  void,
  { dispatch: AppDispatch; state: RootState }
>("auth/refresh", async (_, { rejectWithValue, getState }) => {
  try {
    const { refreshToken } = getState().auth;

    if (!refreshToken) {
      return rejectWithValue({
        message: "Unauthorized",
        status: 401,
      });
    }

    setRefreshApiAuthHeader(refreshToken);

    const { data } = await refreshApi.post<IRefreshResponse>(
      "api/users/refresh"
    );

    setApiAuthHeader(data.accessToken);
    setRefreshApiAuthHeader(data.refreshToken);

    return data;
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return rejectWithValue({
      message: error.message,
      status: error.response?.status,
    });
  }
});
