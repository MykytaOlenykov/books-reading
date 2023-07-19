import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "redux/store";
import { IError } from "types";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: IError;
}>();
