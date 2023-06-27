import { useAppSelector } from "./useAppSelector";
import {
  selectGoingToRead,
  selectCurrentlyReading,
  selectFinishedReading,
  selectError,
  selectIsError,
  selectIsAdding,
  selectIsFirstVisit,
} from "redux/books/selectors";

export const useBooks = () => {
  return {
    goingToRead: useAppSelector(selectGoingToRead),
    currentlyReading: useAppSelector(selectCurrentlyReading),
    finishedReading: useAppSelector(selectFinishedReading),
    error: useAppSelector(selectError),
    isError: useAppSelector(selectIsError),
    isAdding: useAppSelector(selectIsAdding),
    isFirstVisit: useAppSelector(selectIsFirstVisit),
  };
};
