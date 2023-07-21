import { IBookStatus } from "./IBookStatus";

export interface IBookStatuses {
  goingToRead: IBookStatus;
  currentlyReading: IBookStatus;
  finishedReading: IBookStatus;
  planning: IBookStatus;
  training: IBookStatus;
}
