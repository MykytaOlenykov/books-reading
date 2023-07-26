import { format } from "date-fns";

export const formatDate = (date: Date | string | null): string | null => {
  if (!date) {
    return null;
  }

  if (date instanceof Date) {
    return format(date, "yyyy-MM-dd");
  }

  return format(new Date(date), "yyyy-MM-dd");
};
