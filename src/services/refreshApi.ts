import axios from "axios";
import { API_URL } from "constants/";

export const refreshApi = axios.create({
  baseURL: API_URL,
});

export const setRefreshApiAuthHeader = (token: string): void => {
  refreshApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearRefreshApiAuthHeader = (): void => {
  refreshApi.defaults.headers.common.Authorization = "";
};
