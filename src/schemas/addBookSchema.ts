import * as yup from "yup";
import { schemaErrorMessages, schemaPatterns } from "constants/";

export const addBookSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, schemaErrorMessages.title.minLength)
    .max(255, schemaErrorMessages.title.maxLength)
    .required(schemaErrorMessages.title.required),
  author: yup
    .string()
    .trim()
    .min(2, schemaErrorMessages.author.minLength)
    .max(255, schemaErrorMessages.author.maxLength)
    .required(schemaErrorMessages.author.required),
  publishYear: yup
    .number()
    .typeError(schemaErrorMessages.publishYear.required)
    .integer(schemaErrorMessages.publishYear.integer)
    .min(1000, schemaErrorMessages.publishYear.minValue)
    .test(
      "publishYear-matches",
      schemaErrorMessages.publishYear.test,
      function (value) {
        if (!value) {
          return true;
        }
        return schemaPatterns.publishYear.test(String(value));
      }
    )
    .required(schemaErrorMessages.publishYear.required),
  pagesTotal: yup
    .number()
    .typeError(schemaErrorMessages.pagesTotal.required)
    .integer(schemaErrorMessages.pagesTotal.integer)
    .min(1, schemaErrorMessages.pagesTotal.minValue)
    .max(5000, schemaErrorMessages.pagesTotal.maxValue)
    .required(schemaErrorMessages.pagesTotal.required),
});
