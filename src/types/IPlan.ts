export interface IPlan {
  _id: string | null;
  startDate: string | null;
  endDate: string | null;
  books: string[];
  pagesPerDay: number | null;
}
