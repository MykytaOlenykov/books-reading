import { useAppSelector } from "./useAppSelector";
import {
  selectStartDate,
  selectEndDate,
  selectBooks,
  selectFinishedBooks,
  selectError,
  selectIsError,
  selectIsActive,
  selectIsLoaded,
  selectIsAdding,
  selectIsLoading,
} from "redux/planning/selectors";

export const usePlanning = () => ({
  startDate: useAppSelector(selectStartDate),
  endDate: useAppSelector(selectEndDate),
  books: useAppSelector(selectBooks),
  finishedBooks: useAppSelector(selectFinishedBooks),
  error: useAppSelector(selectError),
  isError: useAppSelector(selectIsError),
  isActive: useAppSelector(selectIsActive),
  isLoaded: useAppSelector(selectIsLoaded),
  isLoading: useAppSelector(selectIsLoading),
  isAdding: useAppSelector(selectIsAdding),
});
