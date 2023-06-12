import { useAppSelector } from "./useAppSelector";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsError,
  selectError,
  selectIsLoading,
  selectIsRefreshing,
} from "redux/auth/selectors";

export const useAuth = () => {
  return {
    user: useAppSelector(selectUser),
    isLoggedIn: useAppSelector(selectIsLoggedIn),
    isError: useAppSelector(selectIsError),
    error: useAppSelector(selectError),
    isLoading: useAppSelector(selectIsLoading),
    isRefreshing: useAppSelector(selectIsRefreshing),
  };
};
