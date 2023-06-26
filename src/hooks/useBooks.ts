import { useAppSelector } from "./useAppSelector";
import {
  selectGoingToRead,
  selectCurrentlyReading,
  selectFinishedReading,
  selectError,
  selectIsError,
  selectIsLoading,
  selectIsAdding,
} from "redux/books/selectors";

export const useBooks = () => {
  return {
    goingToRead: useAppSelector(selectGoingToRead),
    currentlyReading: useAppSelector(selectCurrentlyReading),
    finishedReading: useAppSelector(selectFinishedReading),
    error: useAppSelector(selectError),
    isError: useAppSelector(selectIsError),
    isLoading: useAppSelector(selectIsLoading),
    isAdding: useAppSelector(selectIsAdding),
  };
};
