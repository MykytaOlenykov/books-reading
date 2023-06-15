import { storageKeys } from "constants/";
import { ISecurityData } from "types";

type ReturnSecurityData = NonNullable<ISecurityData>;

export class LStorage {
  static getData = <T>(key: string): T | undefined => {
    try {
      const data = localStorage.getItem(key);

      if (!data) {
        return;
      }

      return JSON.parse(data) as T;
    } catch (error) {
      console.log(error);
    }
  };

  static setData = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  static removeData = (key: string): void => {
    localStorage.removeItem(key);
  };

  static getSecurityData = (): ReturnSecurityData | undefined => {
    const data = LStorage.getData<Omit<ReturnSecurityData, "sid">>(
      storageKeys.TMP_KEY_LS
    );
    const sid = LStorage.getData<string>(storageKeys.SID_KEY_LS);

    if (sid && data?.accessToken && data?.refreshToken) {
      const securityData = {
        sid,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };

      LStorage.setData(storageKeys.TMP_KEY_LS, {
        accessToken: null,
        refreshToken: null,
      });

      return securityData;
    }
  };
}
