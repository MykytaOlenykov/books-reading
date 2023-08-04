import { IBook, IStatistic } from "types";

export interface IStatisticResponse {
  statistics: IStatistic;
  book: IBook;
  planStatus: string;
}
