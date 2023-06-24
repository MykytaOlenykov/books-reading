import { AppDispatch } from "redux/store";
import { saveRefreshToken } from "redux/auth/slice";
import { storageKeys } from "constants/";
import { setRefreshApiAuthHeader } from "services";

export const setRefreshToken = (dispatch: AppDispatch): void => {
  const data = localStorage.getItem(storageKeys.REFRESH_TOKEN_KEY_LS);
  localStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY_LS);

  if (data) {
    const refreshToken = JSON.parse(data);

    setRefreshApiAuthHeader(refreshToken);
    dispatch(saveRefreshToken(refreshToken));
  }
};
