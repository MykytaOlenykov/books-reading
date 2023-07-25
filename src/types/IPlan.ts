import { IBook } from "types";

export interface IPlan {
  _id: string | null;
  startDate: string | null;
  endDate: string | null;
  books: IBook[];
  status: string | null;
  pagesPerDay: number | null;
}
