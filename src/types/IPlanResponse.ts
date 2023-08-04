import { IBook, IStatistic } from "types";

export interface IPlanResponse {
  _id: string;
  startDate: string;
  endDate: string;
  books: IBook[];
  statistics: IStatistic[];
  status: string;
  pagesPerDay: number;
}
