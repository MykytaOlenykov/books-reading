import { intervalToDuration, differenceInDays } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { ITime } from "types";

export const calcDurationTime = (startDate: Date, endDate: Date): ITime => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const startDateUtc = zonedTimeToUtc(startDate, timeZone);
  const endDateUtc = zonedTimeToUtc(endDate, timeZone);

  const duration = intervalToDuration({
    start: startDateUtc,
    end: endDateUtc,
  });

  const days = differenceInDays(endDateUtc, startDateUtc)
    .toString()
    .padStart(2, "0");
  const hours = duration.hours?.toString().padStart(2, "0") ?? "00";
  const minutes = duration.minutes?.toString().padStart(2, "0") ?? "00";
  const seconds = duration.seconds?.toString().padStart(2, "0") ?? "00";

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
