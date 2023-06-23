import { AppDispatch } from "redux/store";
import { saveTokens } from "redux/auth/slice";
import { setApiAuthHeader, setRefreshApiAuthHeader } from "services";
import { LStorage } from "./LStorage";
import { storageKeys } from "constants/";

export const setTokens = (dispatch: AppDispatch): void => {
  const accessToken = LStorage.getData<string>(storageKeys.ACCESS_TOKEN_KEY_LS);
  const refreshToken = LStorage.getData<string>(
    storageKeys.REFRESH_TOKEN_KEY_LS
  );

  if (accessToken && refreshToken) {
    setApiAuthHeader(accessToken);
    setRefreshApiAuthHeader(refreshToken);

    dispatch(saveTokens({ accessToken, refreshToken }));

    LStorage.setData(storageKeys.ACCESS_TOKEN_KEY_LS, null);
    LStorage.setData(storageKeys.REFRESH_TOKEN_KEY_LS, null);
  }
};
