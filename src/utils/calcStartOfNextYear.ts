import { startOfYear, addYears } from "date-fns";

export const calcStartOfNextYear = () => {
  const startOfCurrentYear = startOfYear(new Date());

  return addYears(startOfCurrentYear, 1);
};
