import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  startDate: string | null;
  endDate: string | null;
  books: string[];
}

const initialState: IInitialState = {
  startDate: new Date().toString(),
  endDate: null,
  books: [],
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
});

export const {
  changeStartDate,
  changeEndDate,
  addBook,
  deleteBook,
  clearData,
} = planningSlice.actions;

export const planningReducer = planningSlice.reducer;
