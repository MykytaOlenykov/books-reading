import { RootState } from "redux/store";

export const selectStartDate = (state: RootState) => state.planning.startDate;

export const selectEndDate = (state: RootState) => state.planning.endDate;

export const selectBooks = (state: RootState) => state.planning.books;
