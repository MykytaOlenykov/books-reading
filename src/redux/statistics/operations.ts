import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { updateBook } from "redux/books/slice";
import { updateBook as updatePlaningBook } from "redux/planning/slice";
import { IStatistic, IStatisticRequest, IStatisticResponse } from "types";

export const fetchStatistics = createAppAsyncThunk<IStatistic[], void>(
  "statistics/fetchStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get<IStatistic[]>("api/stats");

      return data;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.fetchStatistics,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const addStatistic = createAppAsyncThunk<IStatistic, IStatisticRequest>(
  "statistics/addStatistic",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const { data: newData } = await $api.post<IStatisticResponse>(
        `api/stats?timezone=${timezone}`,
        data
      );

      dispatch(updateBook(newData.book));
      dispatch(updatePlaningBook(newData.book));

      return newData.stats;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.fetchStatistics,
          checkSessionEnd: true,
        })
      );
    }
  }
);
