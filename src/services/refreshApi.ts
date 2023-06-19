import axios from "axios";
import { API_URL } from "constants/";

export const setRefreshApiAuthHeader = (refreshToken: string): void => {
  refreshApi.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

export const clearRefreshApiAuthHeader = (): void => {
  refreshApi.defaults.headers.common.Authorization = "";
};

export const refreshApi = axios.create({
  baseURL: API_URL,
});
