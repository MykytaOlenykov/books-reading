export interface IBook {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
  rating: number | null;
  feedback: string | null;
}
