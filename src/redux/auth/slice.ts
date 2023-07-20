import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer, AnyAction } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { IError, IUser } from "types";

export interface IInitialState {
  userData: IUser;
  error: IError | undefined;
  isLoading: {
    register: boolean;
    logIn: boolean;
    logOut: boolean;
  };
  isError: boolean;
  isRegistered: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const handlePending: CaseReducer<IInitialState, AnyAction> = (
  state,
  action
) => {
  switch (action.type) {
    case register.pending.type:
      state.isLoading.register = true;
      break;
    case logIn.pending.type:
      state.isLoading.logIn = true;
      break;
    case logOut.pending.type:
      state.isLoading.logOut = true;
      break;
  }

  state.isError = false;
  state.error = { message: null, status: null, type: null };
};

const handleRejected: CaseReducer<IInitialState, AnyAction> = (
  state,
  action
) => {
  switch (action.type) {
    case register.rejected.type:
      state.isLoading.register = false;
      break;
    case logIn.rejected.type:
      state.isLoading.logIn = false;
      break;
    case logOut.rejected.type:
      state.isLoading.logOut = false;
      break;
  }

  state.isError = true;
  state.error = action.payload;
};

const initialState: IInitialState = {
  userData: {
    name: null,
    email: null,
  },
  error: { message: null, status: null, type: null },
  isLoading: {
    register: false,
    logIn: false,
    logOut: false,
  },
  isError: false,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    endSession: (state) => {
      state.isLoggedIn = false;
      state.userData = {
        name: null,
        email: null,
      };
    },
    clearError: (state) => {
      state.isError = false;
      state.error = { message: null, status: null, type: null };
    },
    clearIsRegistered: (state) => {
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isRegistered = true;
        state.isLoading.register = false;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isLoading.logIn = false;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading.logOut = false;
        state.userData = {
          name: null,
          email: null,
        };
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { endSession, clearError, clearIsRegistered } = authSlice.actions;
export const authReducer = authSlice.reducer;
