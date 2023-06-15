import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, CaseReducer, AnyAction } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./auth/operations";
import { getUserData } from "./user/operations";
import { IUser, ISecurityData, IRegisterRes, ILogInRes } from "types";

export interface IInitialState {
  userData: IUser;
  securityData: ISecurityData;
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
  userData: {
    id: null,
    name: null,
    email: null,
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
  },
  securityData: {
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
  name: "user",
  initialState,
  reducers: {
    saveSecurityData: (
      state,
      action: PayloadAction<NonNullable<ISecurityData>>
    ) => {
      state.securityData = {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        sid: action.payload.sid,
      };
    },
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
          state.userData = { ...state.userData, ...action.payload };
          state.isRegistered = true;
          state.isLoading = false;
        }
      )
      .addCase(logIn.fulfilled, (state, action: PayloadAction<ILogInRes>) => {
        state.userData = action.payload.userData;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.securityData = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          sid: action.payload.sid,
        };
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.userData = {
          id: null,
          name: null,
          email: null,
          goingToRead: [],
          currentlyReading: [],
          finishedReading: [],
        };
        state.securityData = {
          accessToken: null,
          refreshToken: null,
          sid: null,
        };
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<NonNullable<ISecurityData>>) => {
          state.securityData = action.payload;
        }
      )
      .addCase(
        getUserData.fulfilled,
        (state, action: PayloadAction<NonNullable<Omit<IUser, "id">>>) => {
          state.userData = { ...state.userData, ...action.payload };
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(register.pending, handlePending)
      .addCase(logIn.pending, handlePending)
      .addCase(logOut.pending, handlePending)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { saveSecurityData, clearError, clearIsRegistered } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
