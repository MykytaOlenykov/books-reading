import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPlan, getPlan, finishTraining } from "./operations";
import { IError, IPlan, IBook } from "types";

interface IInitialState {
  data: IPlan;
  finishedBooks: string[];
  error: IError | undefined;
  isError: boolean;
  isActive: boolean;
  isAdding: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = {
  data: {
    _id: null,
    startDate: null,
    endDate: null,
    books: [],
    pagesPerDay: null,
  },
  finishedBooks: [],
  error: { message: null, status: null, type: null },
  isError: false,
  isActive: false,
  isAdding: false,
  isLoading: false,
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
    addBook: (state, action: PayloadAction<IBook>) => {
      state.data.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.data.books = state.data.books.filter(
        (book) => book._id !== action.payload
      );
    },
    clearData: (state) => {
      state.data = {
        _id: null,
        startDate: null,
        endDate: null,
        books: [],
        pagesPerDay: null,
      };
      state.isActive = false;
      state.finishedBooks = [];
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
      })
      .addCase(
        getPlan.fulfilled,
        (state, action: PayloadAction<NonNullable<IPlan>>) => {
          state.data = action.payload;
          state.finishedBooks = action.payload.books.reduce(
            (acc: string[], { _id, pagesTotal, pagesFinished }) => {
              if (pagesTotal === pagesFinished) {
                acc.push(_id);
              }

              return acc;
            },
            []
          );
          state.isActive = true;
        }
      )
      .addCase(getPlan.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(getPlan.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(finishTraining.fulfilled, (state) => {
        state.data._id = null;
        state.data.pagesPerDay = null;
        state.finishedBooks = [];
        state.isActive = false;
        state.isLoading = false;
      })
      .addCase(finishTraining.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null, type: null };
        state.isLoading = true;
      })
      .addCase(finishTraining.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
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
