import axios from "axios";
import { API_URL } from "constants/";

export const setApiAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearApiAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

export const api = axios.create({
  baseURL: API_URL,
});
