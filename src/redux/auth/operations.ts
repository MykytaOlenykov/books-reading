import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError } from "axios";
import { RootState } from "redux/store";

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

axios.defaults.baseURL = "https://bookread-backend.goit.global";

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = "";
};

type RegisterResponse = { id: string; email: string };

export const register = createAsyncThunk<RegisterResponse, IAuthData>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<RegisterResponse>(
        "auth/register",
        credentials
      );

      console.log(data);
      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      console.log(error);
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }
  }
);
