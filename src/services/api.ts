import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { refreshApi } from "services/refreshApi";
import { API_URL, storageKeys } from "constants/";
import { IRefreshResponse } from "types";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const setApiAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearApiAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalReq: MyAxiosRequestConfig | undefined = err.config;

    if (err.response?.status === 401 && originalReq && !originalReq._isRetry) {
      try {
        originalReq._isRetry = true;

        const { data } = await refreshApi.post<IRefreshResponse>(
          "api/users/refresh"
        );

        localStorage.setItem(
          storageKeys.REFRESH_TOKEN_KEY_LS,
          JSON.stringify(data.refreshToken)
        );
        setApiAuthHeader(data.accessToken);

        return api.request(originalReq!);
      } catch (error) {
        throw error;
      }
    }

    throw err;
  }
);
