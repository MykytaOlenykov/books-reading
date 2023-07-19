import { useAppSelector } from "./useAppSelector";
import {
  selectStartDate,
  selectEndDate,
  selectBooks,
} from "redux/planning/selectors";

export const usePlanning = () => ({
  startDate: useAppSelector(selectStartDate),
  endDate: useAppSelector(selectEndDate),
  books: useAppSelector(selectBooks),
});
