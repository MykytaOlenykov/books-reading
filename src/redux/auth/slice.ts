import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";
import { PayloadAction, CaseReducer, AnyAction } from "@reduxjs/toolkit";
import { IUser, IAuth, IRegisterRes, ILogInRes } from "types";

export interface IInitialState {
  user: IUser;
  auth: IAuth;
  error: { message: string | null; status: number | null };
  isRegistered: boolean;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const handlePending: CaseReducer<IInitialState> = (state) => {
  state.isLoading = true;
  state.isError = false;
  state.error = { message: null, status: null };
};

const handleRejected: CaseReducer<IInitialState, AnyAction> = (
  state,
  action
) => {
  state.isLoading = false;
  state.isError = true;
  state.error = action.payload;
};

const initialState: IInitialState = {
  user: {
    id: null,
    name: null,
    email: null,
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
  },
  auth: {
    accessToken: null,
    refreshToken: null,
    sid: null,
  },
  error: { message: null, status: null },
  isRegistered: false,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = { message: null, status: null };
    },
    clearIsRegistered: (state) => {
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<IRegisterRes>) => {
          state.user = { ...state.user, ...action.payload };
          state.isRegistered = true;
          state.isLoading = false;
        }
      )
      .addCase(logIn.fulfilled, (state, action: PayloadAction<ILogInRes>) => {
        state.user = action.payload.userData;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.auth = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          sid: action.payload.sid,
        };
      })
      .addCase(register.pending, handlePending)
      .addCase(logIn.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected);
  },
});

export const { clearError, clearIsRegistered } = authSlice.actions;
export const authReducer = authSlice.reducer;
