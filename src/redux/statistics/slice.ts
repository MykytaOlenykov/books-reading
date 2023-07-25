import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStatistics, addStatistic } from "./operations";
import { IError, IStatistic } from "types";

interface IInitialState {
  stats: IStatistic[];
  error: IError | undefined;
  isError: boolean;
  isLoading: boolean;
  isAdding: boolean;
  isSentReq: boolean;
}

const initialState: IInitialState = {
  stats: [],
  error: { message: null, status: null, type: null },
  isError: false,
  isLoading: false,
  isAdding: false,
  isSentReq: false,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    clearData: (state) => {
      state.stats = [];
      state.isSentReq = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchStatistics.fulfilled,
        (state, action: PayloadAction<IStatistic[]>) => {
          state.stats = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchStatistics.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = { message: null, status: null, type: null };
        state.isSentReq = true;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
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

export const { clearData } = statisticsSlice.actions;

export const statisticsReducer = statisticsSlice.reducer;
