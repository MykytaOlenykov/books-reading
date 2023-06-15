import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { AppDispatch } from "redux/store";
import { saveSecurityData } from "../slice";
import { api } from "services";
import { LStorage } from "utils";
import { IUser } from "types";

type ResponseType = NonNullable<Omit<IUser, "id">>;

export const getUserData = createAsyncThunk<
  ResponseType,
  void,
  { dispatch: AppDispatch }
>("user/getUserData", async (_, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await api.get<ResponseType>("user/books");

    const securityData = LStorage.getSecurityData();

    if (securityData) {
      dispatch(saveSecurityData(securityData));
    }

    return data;
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return rejectWithValue({
      message: error.message,
      status: error.response?.status,
    });
  }
});
