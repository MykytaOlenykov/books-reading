import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { IPlan, IPlanRequest } from "types";

export const getPlan = createAppAsyncThunk<NonNullable<IPlan>, void>(
  "planning/getPlan",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get<NonNullable<IPlan>>("api/plans");

      return data;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.getPlan,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const addPlan = createAppAsyncThunk<NonNullable<IPlan>, IPlanRequest>(
  "planning/addPlan",
  async (data, { rejectWithValue }) => {
    try {
      const { data: newPlan } = await $api.post<NonNullable<IPlan>>(
        `api/plans`,
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
