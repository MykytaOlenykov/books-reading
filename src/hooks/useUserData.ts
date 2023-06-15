import { useAppSelector } from "./useAppSelector";
import {
  selectUserData,
  selectError,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsError,
  selectIsLoading,
  selectIsRefreshing,
} from "redux/selectors";

export const useUserData = () => {
  return {
    userData: useAppSelector(selectUserData),
    error: useAppSelector(selectError),
    isRegistered: useAppSelector(selectIsRegistered),
    isLoggedIn: useAppSelector(selectIsLoggedIn),
    isError: useAppSelector(selectIsError),
    isLoading: useAppSelector(selectIsLoading),
    isRefreshing: useAppSelector(selectIsRefreshing),
  };
};
