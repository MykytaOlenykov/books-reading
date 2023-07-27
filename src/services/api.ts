import axios, { isAxiosError } from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { $refreshApi } from "services/refreshApi";
import { API_URL, storageKeys } from "constants/";
import { IRefreshResponse } from "types";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const $api = axios.create({
  baseURL: API_URL,
});

export const setApiAuthHeader = (token: string): void => {
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearApiAuthHeader = (): void => {
  $api.defaults.headers.common.Authorization = "";
};

$api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalReq: MyAxiosRequestConfig | undefined = err.config;

    if (err.response?.status === 401 && originalReq && !originalReq._isRetry) {
      try {
        originalReq._isRetry = true;

        const { data } = await $refreshApi.post<IRefreshResponse>(
          "api/users/refresh"
        );

        if (originalReq.headers) {
          originalReq.headers.Authorization = `Bearer ${data.accessToken}`;
        }

        setApiAuthHeader(data.accessToken);

        return $api.request(originalReq!);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 401) {
          clearApiAuthHeader();
          localStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY_LS);
        }

        throw error;
      }
    }

    throw err;
  }
);
