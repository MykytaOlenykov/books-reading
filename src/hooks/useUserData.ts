import { useAppSelector } from "./useAppSelector";
import {
  selectUser,
  selectError,
  selectIsRegistered,
  selectIsLoggedIn,
  selectIsError,
  selectIsLoading,
  selectIsRefreshing,
} from "redux/selectors";

export const useUserData = () => {
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
