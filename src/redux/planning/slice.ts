import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPlan, cancelTraining, changeStatus } from "./operations";
import { IError, IPlan, IBook, IStatisticResponse } from "types";

interface IInitialState {
  data: IPlan;
  finishedBooks: string[];
  error: IError | undefined;
  isError: boolean;
  isAdding: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = {
  data: {
    _id: null,
    startDate: null,
    endDate: null,
    books: [],
    status: null,
    pagesPerDay: null,
  },
  finishedBooks: [],
  error: { message: null, status: null, type: null },
  isError: false,
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
    setData: (state, action: PayloadAction<NonNullable<IPlan> | null>) => {
      if (action.payload) {
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
      }
    },
    updateData: (
      state,
      action: PayloadAction<Omit<IStatisticResponse, "stats">>
    ) => {
      const {
        book: { _id, pagesTotal, pagesFinished },
        planStatus,
      } = action.payload;

      state.data.status = planStatus;

      const idx = state.data.books.findIndex((book) => book._id === _id);
      state.data.books.splice(idx, 1, action.payload.book);

      if (pagesTotal === pagesFinished) {
        state.finishedBooks = [...state.finishedBooks, _id];
      }
    },
    clearData: (state) => {
      state.data = {
        _id: null,
        startDate: null,
        endDate: null,
        books: [],
        status: null,
        pagesPerDay: null,
      };
      state.finishedBooks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addPlan.fulfilled,
        (state, action: PayloadAction<NonNullable<IPlan>>) => {
          state.data = action.payload;
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
        changeStatus.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.data.status = action.payload;
        }
      )
      .addCase(changeStatus.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null, type: null };
      })
      .addCase(changeStatus.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(cancelTraining.fulfilled, (state) => {
        state.data = {
          _id: null,
          startDate: null,
          endDate: null,
          books: [],
          status: null,
          pagesPerDay: null,
        };
        state.finishedBooks = [];
        state.isLoading = false;
      })
      .addCase(cancelTraining.pending, (state) => {
        state.isError = false;
        state.error = { message: null, status: null, type: null };
        state.isLoading = true;
      })
      .addCase(cancelTraining.rejected, (state, action) => {
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
  setData,
  updateData,
  clearData,
} = planningSlice.actions;

export const planningReducer = planningSlice.reducer;
