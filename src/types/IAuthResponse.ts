import { IUser } from "./IUser";

export interface IAuthResponse {
  userData: IUser;
  accessToken: string;
}
