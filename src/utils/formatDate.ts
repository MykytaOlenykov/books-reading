import { format } from "date-fns";

export const formatDate = (date: string | null): string | null => {
  if (!date) {
    return null;
  }

  return format(new Date(date), "yyyy-MM-dd");
};
