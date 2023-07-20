import { RootState } from "redux/store";

export const selectStartDate = (state: RootState) =>
  state.planning.data.startDate;

export const selectEndDate = (state: RootState) => state.planning.data.endDate;

export const selectBooks = (state: RootState) => state.planning.data.books;
