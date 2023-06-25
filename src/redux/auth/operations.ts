import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { AppDispatch, RootState } from "redux/store";
import {
  api,
  setApiAuthHeader,
  clearApiAuthHeader,
  refreshApi,
} from "services";
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

export const logIn = createAsyncThunk<
  IAuthResponse["userData"],
  Omit<IAuthRequest, "name">
>("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.post<IAuthResponse>(
      "api/users/login",
      credentials
    );

    setApiAuthHeader(data.accessToken);

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

export const logOut = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("api/users/logout");

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
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>("auth/refresh", async (_, { rejectWithValue }) => {
  try {
    const { data } = await refreshApi.post<IRefreshResponse>(
      "api/users/refresh"
    );

    setApiAuthHeader(data.accessToken);
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
