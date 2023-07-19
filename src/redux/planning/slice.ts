import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPlan } from "./operations";
import { IPlan } from "types";

interface IInitialState {
  startDate: string | null;
  endDate: string | null;
  books: string[];
  plan: IPlan | null;
  isAdding: boolean;
}

const initialState: IInitialState = {
  startDate: null,
  endDate: null,
  books: [],
  plan: null,
  isAdding: false,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    changeStartDate: (state, action: PayloadAction<string | null>) => {
      state.startDate = action.payload;
    },
    changeEndDate: (state, action: PayloadAction<string | null>) => {
      state.endDate = action.payload;
    },
    addBook: (state, action: PayloadAction<string>) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const idx = state.books.findIndex((bookId) => bookId === action.payload);
      state.books.splice(idx, 1);
    },
    clearData: (state) => {
      state.startDate = null;
      state.endDate = null;
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      addPlan.fulfilled,
      (state, action: PayloadAction<IPlan>) => {
        state.plan = action.payload;
      }
    );
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
