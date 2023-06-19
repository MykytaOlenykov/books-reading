import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { refreshApi } from "services";
import { LStorage } from "utils";
import { storageKeys, API_URL } from "constants/";
import { IRefreshRes } from "types";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const setApiAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearApiAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

export const api = axios.create({
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
      } catch (error) {
        throw error;
      }
    }

    throw err;
  }
);
