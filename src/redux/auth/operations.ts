import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError } from "axios";
import { RootState } from "redux/store";
import { IAuth, ILogInReq, ILogInRes, IRegisterReq, IRegisterRes } from "types";

const API_URL = "https://bookread-backend.goit.global";

const api = axios.create({
  baseURL: API_URL,
});

const refreshAPI = axios.create({
  baseURL: API_URL,
});

const setAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

const setRefreshAPIAuthHeader = (refreshToken: string): void => {
  refreshAPI.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

const clearRefreshAPIAuthHeader = (): void => {
  refreshAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<IRegisterRes, IRegisterReq>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post<IRegisterRes>(
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
      const { data } = await api.post<ILogInRes>("auth/login", credentials);

      setAuthHeader(data.accessToken);
      setRefreshAPIAuthHeader(data.refreshToken);
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
