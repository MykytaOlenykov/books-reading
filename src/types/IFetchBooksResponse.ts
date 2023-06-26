import { IBook } from "types";

export interface IFetchBooksResponse {
  goingToRead: IBook[];
  currentlyReading: IBook[];
  finishedReading: IBook[];
}
