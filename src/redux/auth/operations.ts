import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { AppDispatch, RootState } from "redux/store";
import {
  api,
  setApiAuthHeader,
  clearApiAuthHeader,
  refreshApi,
  setRefreshApiAuthHeader,
  clearRefreshApiAuthHeader,
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
  Omit<IAuthResponse, "accessToken">,
  Omit<IAuthRequest, "name">
>("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.post<IAuthResponse>(
      "api/users/login",
      credentials
    );

    setApiAuthHeader(data.accessToken);
    setRefreshApiAuthHeader(data.refreshToken);

    return {
      userData: data.userData,
      refreshToken: data.refreshToken,
    };
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
      clearRefreshApiAuthHeader();
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
  string,
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

    return data.refreshToken;
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
