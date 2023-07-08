import { IUser } from "./IUser";

export interface IAuthResponse {
  userData: NonNullable<IUser>;
  accessToken: string;
  refreshToken: string;
}
