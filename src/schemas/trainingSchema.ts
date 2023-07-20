import * as yup from "yup";
import { dateDifferenceInDays } from "utils";
import { schemaErrorMessages } from "constants/";

export const trainingSchema = yup.object({
  books: yup
    .array()
    .of(yup.string())
    .min(1, schemaErrorMessages.books.min)
    .max(20, schemaErrorMessages.books.max)
    .required(schemaErrorMessages.books.required),
  endDate: yup
    .string()
    .test(
      "endDate-matches",
      schemaErrorMessages.endDate.test,
      function (value) {
        const difference = dateDifferenceInDays(
          this.parent.startDate,
          value ?? null
        );
        return difference ? true : false;
      }
    )
    .required(schemaErrorMessages.endDate.required),
  startDate: yup
    .string()
    .test(
      "startDate-matches",
      schemaErrorMessages.startDate.test,
      function (value) {
        const difference = dateDifferenceInDays(
          new Date().toString(),
          value ?? null
        );
        return difference >= 0 ? true : false;
      }
    )
    .required(schemaErrorMessages.startDate.required),
});
