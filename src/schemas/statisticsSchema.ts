import * as yup from "yup";
import { schemaErrorMessages } from "constants/";

export const statisticsSchema = yup.object({
  pages: yup
    .number()
    .typeError(schemaErrorMessages.pagesTotal.required)
    .integer(schemaErrorMessages.pagesTotal.integer)
    .min(1, schemaErrorMessages.pagesTotal.minValue)
    .required(schemaErrorMessages.pagesTotal.required),
  book: yup.string().required(schemaErrorMessages.statisticBook.required),
});
