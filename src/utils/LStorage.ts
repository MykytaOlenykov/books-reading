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
}
