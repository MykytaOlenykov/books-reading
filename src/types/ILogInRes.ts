import { IUser } from "./IUser";

export interface ILogInRes {
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: IUser;
}
