import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addStatistic } from "./operations";
import { IError, IStatistic } from "types";

interface IInitialState {
  stats: IStatistic[];
  error: IError | undefined;
  isError: boolean;
  isAdding: boolean;
}

const initialState: IInitialState = {
  stats: [],
  error: { message: null, status: null, type: null },
  isError: false,
  isAdding: false,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IStatistic[]>) => {
      state.stats = action.payload;
    },
    clearData: (state) => {
      state.stats = [];
    },
    clearError: (state) => {
      state.error = { message: null, status: null, type: null };
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addStatistic.fulfilled,
        (state, action: PayloadAction<IStatistic>) => {
          const idx = state.stats.findIndex(
            ({ _id }) => _id === action.payload._id
          );
          state.isAdding = false;

          if (!!~idx) {
            state.stats[idx].currentDateStats = action.payload.currentDateStats;
          } else {
            state.stats = [...state.stats, action.payload];
          }
        }
      )
      .addCase(addStatistic.pending, (state) => {
        state.isAdding = true;
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(addStatistic.rejected, (state, action) => {
        state.isAdding = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { setData, clearData, clearError } = statisticsSlice.actions;

export const statisticsReducer = statisticsSlice.reducer;
