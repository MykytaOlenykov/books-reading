import { IBookStatuses } from "types";

export const bookStatuses: Readonly<IBookStatuses> = {
  goingToRead: "goingToRead",
  currentlyReading: "currentlyReading",
  finishedReading: "finishedReading",
  planning: "planning",
  training: "training",
};
