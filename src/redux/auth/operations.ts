import { fetchBooks } from "redux/books/operations";
import { fetchPlan } from "redux/planning/operations";
import { setBooks } from "redux/books/slice";
import { setData } from "redux/planning/slice";
import { AppDispatch } from "redux/store";
import {
  $api,
  setApiAuthHeader,
  clearApiAuthHeader,
  $refreshApi,
} from "services";
import { errorObjectCreator, createAppAsyncThunk } from "utils";
import { errorTypes, storageKeys } from "constants/";
import { IAuthRequest, IAuthResponse, IRefreshResponse, IUser } from "types";

export const register = createAppAsyncThunk<NonNullable<IUser>, IAuthRequest>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await $api.post<NonNullable<IUser>>(
        "api/users/register",
        credentials
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({ error, type: errorTypes.register })
      );
    }
  }
);

export const logIn = createAppAsyncThunk<
  IAuthResponse["userData"],
  Omit<IAuthRequest, "name">
>("auth/logIn", async (credentials, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await $api.post<IAuthResponse>(
      "api/users/login",
      credentials
    );

    localStorage.setItem(
      storageKeys.REFRESH_TOKEN_KEY_LS,
      JSON.stringify(data.refreshToken)
    );

    setApiAuthHeader(data.accessToken);

    const books = await fetchBooks();
    dispatch(setBooks(books));

    const plan = await fetchPlan();
    dispatch(setData(plan));

    return data.userData;
  } catch (error) {
    return rejectWithValue(
      errorObjectCreator({ error, type: errorTypes.logIn })
    );
  }
});

export const logOut = createAppAsyncThunk<void, void>(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await $api.post("api/users/logout");

      localStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY_LS);

      clearApiAuthHeader();
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.logOut,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const refreshUser = createAppAsyncThunk<
  IAuthResponse["userData"],
  void,
  { dispatch: AppDispatch }
>("auth/refresh", async (_, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await $refreshApi.post<IRefreshResponse>(
      "api/users/refresh"
    );

    localStorage.setItem(
      storageKeys.REFRESH_TOKEN_KEY_LS,
      JSON.stringify(data.refreshToken)
    );

    setApiAuthHeader(data.accessToken);

    const { data: userData } = await $api.get<IAuthResponse["userData"]>(
      "api/users/current"
    );

    const books = await fetchBooks();
    dispatch(setBooks(books));

    const plan = await fetchPlan();
    dispatch(setData(plan));

    return userData;
  } catch (error) {
    return rejectWithValue(
      errorObjectCreator({ error, type: errorTypes.refresh })
    );
  }
});
