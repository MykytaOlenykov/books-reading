import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, CaseReducer, AnyAction } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { IAuthResponse, IError, IUser } from "types";

export interface IInitialState {
  userData: IUser;
  error: IError;
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
    name: null,
    email: null,
  },
  error: { message: null, status: null },
  isRegistered: false,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isRefreshing: true,
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
        (state, action: PayloadAction<NonNullable<IUser>>) => {
          state.userData = action.payload;
          state.isRegistered = true;
          state.isLoading = false;
        }
      )
      .addCase(
        logIn.fulfilled,
        (state, action: PayloadAction<IAuthResponse["userData"]>) => {
          state.userData = action.payload;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.userData = {
          name: null,
          email: null,
        };
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<NonNullable<IUser>>) => {
          state.userData = action.payload;
          state.isRefreshing = false;
          state.isLoggedIn = true;
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

export const { clearError, clearIsRegistered } = authSlice.actions;
export const authReducer = authSlice.reducer;
