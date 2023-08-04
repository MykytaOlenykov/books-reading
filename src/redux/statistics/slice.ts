import {
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import { addStatistic } from "./operations";
import { logOut } from "redux/auth/operations";
import { errorTypes } from "constants/";
import { IError, IStatistic } from "types";

interface IInitialState {
  data: IStatistic[];
  error: IError | undefined;
  isError: boolean;
  isAdding: boolean;
}

const initialState: IInitialState = {
  data: [],
  error: { message: null, status: null, type: null },
  isError: false,
  isAdding: false,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IStatistic[]>) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
    clearError: (state) => {
      state.error = { message: null, status: null, type: null };
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addStatistic.fulfilled, (state, action) => {
        const idx = state.data.findIndex(
          ({ _id }) => _id === action.payload._id
        );
        state.isAdding = false;

        if (!!~idx) {
          state.data[idx].currentDateStats = action.payload.currentDateStats;
        } else {
          state.data = [...state.data, action.payload];
        }
      })
      .addCase(addStatistic.pending, (state) => {
        state.isAdding = true;
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(addStatistic.rejected, (state, action) => {
        state.isAdding = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.data = [];
      })
      .addMatcher<PayloadAction<IError>>(
        isRejectedWithValue,
        (state, action) => {
          if (action.payload.type === errorTypes.endOfSession) {
            state.data = [];
          }
        }
      );
  },
});

export const { setData, clearData, clearError } = statisticsSlice.actions;

export const statisticsReducer = statisticsSlice.reducer;
