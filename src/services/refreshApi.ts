import axios from "axios";
import { API_URL } from "constants/";
import { storageKeys } from "constants/";

export const $refreshApi = axios.create({
  baseURL: API_URL,
});

$refreshApi.interceptors.request.use((config) => {
  const data = localStorage.getItem(storageKeys.REFRESH_TOKEN_KEY_LS);

  if (data) {
    const refreshToken: string = JSON.parse(data);

    config.headers.Authorization = `Bearer ${refreshToken}`;
  }

  return config;
});
