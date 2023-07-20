import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPlan } from "./operations";
import { IError, IPlan } from "types";

interface IInitialState {
  data: IPlan;
  error: IError | undefined;
  isError: boolean;
  isActive: boolean;
  isAdding: boolean;
}

const initialState: IInitialState = {
  data: {
    _id: null,
    startDate: null,
    endDate: null,
    books: [],
    duration: null,
    pagesPerDay: null,
  },
  error: { message: null, status: null, type: null },
  isError: false,
  isActive: false,
  isAdding: false,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    changeStartDate: (state, action: PayloadAction<string | null>) => {
      state.data.startDate = action.payload;
    },
    changeEndDate: (state, action: PayloadAction<string | null>) => {
      state.data.endDate = action.payload;
    },
    addBook: (state, action: PayloadAction<string>) => {
      state.data.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const idx = state.data.books.findIndex(
        (bookId) => bookId === action.payload
      );
      state.data.books.splice(idx, 1);
    },
    clearData: (state) => {
      state.data = {
        _id: null,
        startDate: null,
        endDate: null,
        books: [],
        duration: null,
        pagesPerDay: null,
      };
      state.isActive = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addPlan.fulfilled,
        (state, action: PayloadAction<NonNullable<IPlan>>) => {
          state.data = action.payload;
          state.isActive = true;
          state.isAdding = false;
        }
      )
      .addCase(addPlan.pending, (state) => {
        state.isAdding = true;
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(addPlan.rejected, (state, action) => {
        state.isAdding = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {
  changeStartDate,
  changeEndDate,
  addBook,
  deleteBook,
  clearData,
} = planningSlice.actions;

export const planningReducer = planningSlice.reducer;
