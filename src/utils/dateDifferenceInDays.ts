import { differenceInCalendarDays } from "date-fns";

export const dateDifferenceInDays = (
  startDate: string | null,
  endDate: string | null
): number => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  if (!parsedStartDate || !parsedEndDate) {
    return 0;
  }

  return differenceInCalendarDays(parsedEndDate, parsedStartDate);
};
