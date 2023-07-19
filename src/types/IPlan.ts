import { IBook } from "types/IBook";

export interface IPlan {
  _id: string;
  startDate: string;
  endDate: string;
  books: IBook[];
  duration: number;
  pagesPerDay: number;
}
