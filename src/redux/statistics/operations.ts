import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { updateBook } from "redux/books/slice";
import { updateData } from "redux/planning/slice";
import { IStatistic, IStatisticRequest, IStatisticResponse } from "types";

export const addStatistic = createAppAsyncThunk<IStatistic, IStatisticRequest>(
  "statistics/addStatistic",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const { data: newData } = await $api.patch<IStatisticResponse>(
        `api/plans/stats?timezone=${timezone}`,
        data
      );

      dispatch(updateBook(newData.book));
      dispatch(
        updateData({
          book: newData.book,
          planStatus: newData.planStatus,
        })
      );

      return newData.stats;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.addStatistic,
          checkSessionEnd: true,
        })
      );
    }
  }
);
