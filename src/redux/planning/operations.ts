import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { IPlan, IPlanRequest } from "types";

export const fetchPlan = async (): Promise<NonNullable<IPlan> | null> => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { data } = await $api.get<NonNullable<IPlan>>(
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

export const finishTraining = createAppAsyncThunk<void, void>(
  "planning/finishTraining",
  async (_, { rejectWithValue }) => {
    try {
      await $api.delete(`api/plans`);
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.finishTraining,
          checkSessionEnd: true,
        })
      );
    }
  }
);
