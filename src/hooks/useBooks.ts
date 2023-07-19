import { useAppSelector } from "./useAppSelector";
import {
  selectGoingToRead,
  selectCurrentlyReading,
  selectFinishedReading,
  selectError,
  selectIsError,
  selectIsAdding,
  selectIsDeleting,
  selectIsFirstVisit,
} from "redux/books/selectors";

export const useBooks = () => ({
  goingToRead: useAppSelector(selectGoingToRead),
  currentlyReading: useAppSelector(selectCurrentlyReading),
  finishedReading: useAppSelector(selectFinishedReading),
  error: useAppSelector(selectError),
  isError: useAppSelector(selectIsError),
  isAdding: useAppSelector(selectIsAdding),
  isDeleting: useAppSelector(selectIsDeleting),
  isFirstVisit: useAppSelector(selectIsFirstVisit),
});
