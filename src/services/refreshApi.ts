import axios from "axios";
import { API_URL } from "constants/";

export const refreshApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
