import { IBook } from "types";

export interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  goingToRead: IBook[];
  currentlyReading: IBook[];
  finishedReading: IBook[];
}
