export interface IStatistic {
  _id: string;
  date: string;
  pagesPerDay: number;
  currentDateStats: {
    _id: string;
    pagesRead: number;
    time: string;
    book: string;
    isFinishedBook: boolean;
  }[];
}
