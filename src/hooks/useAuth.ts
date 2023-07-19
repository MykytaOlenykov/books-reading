import { useAppSelector } from "./useAppSelector";
import {
  selectUserData,
  selectError,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsError,
  selectIsLoading,
  selectIsRefreshing,
} from "redux/auth/selectors";

export const useAuth = () => ({
  userData: useAppSelector(selectUserData),
  error: useAppSelector(selectError),
  isRegistered: useAppSelector(selectIsRegistered),
  isLoggedIn: useAppSelector(selectIsLoggedIn),
  isError: useAppSelector(selectIsError),
  isLoading: useAppSelector(selectIsLoading),
  isRefreshing: useAppSelector(selectIsRefreshing),
});
