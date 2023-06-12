import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";
import { PayloadAction, CaseReducer, AnyAction } from "@reduxjs/toolkit";

export interface IInitialState {
  user: { id: string | null; email: string | null };
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  error: { message: string | null; status: number | null };
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
  state.isError = true;
  state.error = action.payload;
};

const initialState: IInitialState = {
  user: { id: null, email: null },
  token: null,
  isLoading: false,
  isError: false,
  error: { message: null, status: null },
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ id: string; email: string }>) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected);
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
