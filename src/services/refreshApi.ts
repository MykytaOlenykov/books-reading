import axios from "axios";
import { API_URL } from "constants/";
import { storageKeys } from "constants/storageKeys";

export const $refreshApi = axios.create({
  baseURL: API_URL,
});

$refreshApi.interceptors.request.use((config) => {
  const refreshToken =
    localStorage.getItem(storageKeys.REFRESH_TOKEN_KEY_LS) ?? "";

  config.headers.Authorization = `Bearer ${refreshToken}`;
  return config;
});
