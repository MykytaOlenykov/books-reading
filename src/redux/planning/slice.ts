import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  startDate: string;
  endDate: string;
  books: string[];
}

const initialState: IInitialState = {
  startDate: "",
  endDate: "",
  books: [],
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    changeStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    changeEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    addBook: (state, action: PayloadAction<string>) => {
      state.books.push(action.payload);
    },
  },
});

export const planningReducer = planningSlice.reducer;
