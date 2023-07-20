import { $api } from "services";
import { createAppAsyncThunk, errorObjectCreator } from "utils";
import { errorTypes } from "constants/";
import { IPlan, IPlanRequest } from "types";

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
