import { useAppSelector } from "./useAppSelector";
import {
  selectUser,
  selectError,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsError,
  selectIsLoading,
  selectIsRefreshing,
} from "redux/auth/selectors";

export const useAuth = () => {
  return {
    user: useAppSelector(selectUser),
    error: useAppSelector(selectError),
    isRegistered: useAppSelector(selectIsRegistered),
    isLoggedIn: useAppSelector(selectIsLoggedIn),
    isError: useAppSelector(selectIsError),
    isLoading: useAppSelector(selectIsLoading),
    isRefreshing: useAppSelector(selectIsRefreshing),
  };
};
