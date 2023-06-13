import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError } from "axios";
import { RootState } from "redux/store";
import {
  ISecurityData,
  ILogInReq,
  ILogInRes,
  IRefreshRes,
  IRegisterReq,
  IRegisterRes,
} from "types";

const setAuthApiHeader = (token: string): void => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthApiHeader = (): void => {
  authApi.defaults.headers.common.Authorization = "";
};

const setRefreshAuthApiAuthHeader = (refreshToken: string): void => {
  refreshAuthApi.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

const clearRefreshAuthApiAuthHeader = (): void => {
  refreshAuthApi.defaults.headers.common.Authorization = "";
};

const API_URL = "https://bookread-backend.goit.global";

const authApi = axios.create({
  baseURL: API_URL,
});

const refreshAuthApi = axios.create({
  baseURL: API_URL,
});

export const register = createAsyncThunk<IRegisterRes, IRegisterReq>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post<IRegisterRes>(
        "auth/register",
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

export const logIn = createAsyncThunk<ILogInRes, ILogInReq>(
  "auth/logIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post<ILogInRes>("auth/login", credentials);

      setAuthApiHeader(data.accessToken);
      setRefreshAuthApiAuthHeader(data.refreshToken);
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

export const logOut = createAsyncThunk<void, void>(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.post("auth/logout");

      clearAuthApiHeader();
      clearRefreshAuthApiAuthHeader();
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);

export const refreshUser = createAsyncThunk<NonNullable<ISecurityData>, void>(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState() as RootState;
    const refreshToken = auth.securityData.refreshToken;

    if (!refreshToken) {
      return rejectWithValue("");
    }

    try {
      setRefreshAuthApiAuthHeader(refreshToken);

      const { data } = await refreshAuthApi.post<IRefreshRes>("auth/refresh", {
        sid: auth.securityData.sid,
      });

      return {
        accessToken: data.newAccessToken,
        refreshToken: data.newRefreshToken,
        sid: data.newSid,
      };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);
