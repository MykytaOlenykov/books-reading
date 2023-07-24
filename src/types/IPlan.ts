import { IBook } from "./IBook";

export interface IPlan {
  _id: string | null;
  startDate: string | null;
  endDate: string | null;
  books: IBook[];
  isFinished: boolean | null;
  pagesPerDay: number | null;
}
