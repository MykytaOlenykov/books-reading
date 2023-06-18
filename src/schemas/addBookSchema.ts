import * as yup from "yup";
import { errorFormMessages } from "constants/";

export const addBookSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, errorFormMessages.title.minLength)
    .max(255, errorFormMessages.title.maxLength)
    .required(errorFormMessages.title.required),
  author: yup
    .string()
    .trim()
    .min(2, errorFormMessages.author.minLength)
    .max(255, errorFormMessages.author.maxLength)
    .required(errorFormMessages.author.required),
  publishYear: yup
    .number()
    .typeError(errorFormMessages.publishYear.required)
    .integer(errorFormMessages.publishYear.integer)
    .min(1000, errorFormMessages.publishYear.minValue)
    .max(new Date().getFullYear(), errorFormMessages.publishYear.maxValue)
    .required(errorFormMessages.publishYear.required),
  pagesTotal: yup
    .number()
    .typeError(errorFormMessages.pagesTotal.required)
    .integer(errorFormMessages.pagesTotal.integer)
    .min(1, errorFormMessages.pagesTotal.minValue)
    .max(5000, errorFormMessages.pagesTotal.maxValue)
    .required(errorFormMessages.pagesTotal.required),
});
