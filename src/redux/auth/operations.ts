import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { RootState, AppDispatch } from "redux/store";
import { saveSecurityData } from "../slice";
import { getUserData } from "redux/user/operations";
import { api, setApiAuthHeader, clearApiAuthHeader } from "services";
import { LStorage } from "utils";
import { storageKeys, API_URL } from "constants/";
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

const setRefreshApiAuthHeader = (refreshToken: string): void => {
  refreshApi.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

const clearRefreshApiAuthHeader = (): void => {
  refreshApi.defaults.headers.common.Authorization = "";
};

const refreshApi = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalReq: MyAxiosRequestConfig | undefined = err.config;

    if (err.response?.status === 401 && originalReq && !originalReq._isRetry) {
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
    }

    throw err;
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
      console.log(axiosError);

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
      clearApiAuthHeader();
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

export const refreshUser = createAsyncThunk<
  NonNullable<ISecurityData>,
  void,
  { state: RootState; dispatch: AppDispatch }
>("auth/refresh", async (_, { getState, rejectWithValue, dispatch }) => {
  const { user } = getState();
  const refreshToken = user.securityData.refreshToken;

  if (!refreshToken) {
    return rejectWithValue("");
  }

  try {
    setRefreshApiAuthHeader(refreshToken);

    const { data } = await refreshApi.post<IRefreshRes>("auth/refresh", {
      sid: user.securityData.sid,
    });

    LStorage.setData(storageKeys.SID_KEY_LS, data.newSid);
    setApiAuthHeader(data.newAccessToken);
    setRefreshApiAuthHeader(data.newRefreshToken);

    await dispatch(getUserData());

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
});
