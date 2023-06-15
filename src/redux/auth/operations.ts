import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { RootState, AppDispatch } from "redux/store";
import { saveSecurityData } from "./slice";
import { LStorage } from "utils";
import { storageKeys } from "constants/";
import {
  ISecurityData,
  ILogInReq,
  ILogInRes,
  IRefreshRes,
  IRegisterReq,
  IRegisterRes,
} from "types";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

const setApiHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearApiHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

const setRefreshApiAuthHeader = (refreshToken: string): void => {
  refreshApi.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

const clearRefreshApiAuthHeader = (): void => {
  refreshApi.defaults.headers.common.Authorization = "";
};

const API_URL = "https://bookread-backend.goit.global";

const api = axios.create({
  baseURL: API_URL,
});

const refreshApi = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalReq: MyAxiosRequestConfig | undefined = err.config;

    if (err.response?.status === 401 && originalReq && !originalReq._isRetry) {
      console.log(1);

      try {
        originalReq._isRetry = true;

        const sid = LStorage.getData(storageKeys.SID_KEY_LS);

        const { data } = await refreshApi.post<IRefreshRes>("auth/refresh", {
          sid,
        });
        LStorage.setData(storageKeys.SID_KEY_LS, data.newSid);
        LStorage.setData(storageKeys.TMP_KEY_LS, {
          accessToken: data.newAccessToken,
          refreshToken: data.newRefreshToken,
        });

        return api.request(originalReq!);
      } catch (error) {}

      throw err;
    }
  }
);

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

      LStorage.setData(storageKeys.SID_KEY_LS, data.sid);
      setApiHeader(data.accessToken);
      setRefreshApiAuthHeader(data.refreshToken);
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

export const logOut = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  "auth/logOut",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await api.post("auth/logout");

      const securityData = LStorage.getSecurityData();

      if (securityData) {
        dispatch(saveSecurityData(securityData));
      }

      LStorage.removeData(storageKeys.SID_KEY_LS);
      clearApiHeader();
      clearRefreshApiAuthHeader();
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
      setRefreshApiAuthHeader(refreshToken);

      const { data } = await refreshApi.post<IRefreshRes>("auth/refresh", {
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
