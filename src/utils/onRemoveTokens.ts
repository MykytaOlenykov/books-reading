import { clearApiAuthHeader } from "services";
import { storageKeys } from "constants/";

export const onRemoveTokens = (): void => {
  localStorage.removeItem(storageKeys.REFRESH_TOKEN_KEY_LS);
  clearApiAuthHeader();
};
