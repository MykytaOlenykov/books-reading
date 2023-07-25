import { IBook, IStatistic } from "types";

export interface IPlanResponse {
  _id: string;
  startDate: string;
  endDate: string;
  books: IBook[];
  stats: IStatistic[];
  status: string;
  pagesPerDay: number;
}
