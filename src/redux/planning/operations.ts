import { clearData } from "redux/statistics/slice";
import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { IPlan, IPlanRequest, IPlanResponse } from "types";

export const fetchPlan = async (): Promise<IPlanResponse | null> => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { data } = await $api.get<IPlanResponse>(
      `api/plans?timezone=${timezone}`
    );

    return data;
  } catch {
    return null;
  }
};

export const addPlan = createAppAsyncThunk<NonNullable<IPlan>, IPlanRequest>(
  "planning/addPlan",
  async (data, { rejectWithValue }) => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const { data: newPlan } = await $api.post<NonNullable<IPlan>>(
        `api/plans?timezone=${timezone}`,
        data
      );

      return newPlan;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.addPlan,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const changeStatus = createAppAsyncThunk<string, string>(
  "planning/changeStatus",
  async (data, { rejectWithValue }) => {
    try {
      const { data: newStatus } = await $api.patch<{ status: string }>(
        `api/plans`,
        {
          status: data,
        }
      );

      return newStatus.status;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.changeStatus,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const cancelTraining = createAppAsyncThunk<void, void>(
  "planning/cancelTraining",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await $api.delete(`api/plans`);

      dispatch(clearData());
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.cancelTraining,
          checkSessionEnd: true,
        })
      );
    }
  }
);
