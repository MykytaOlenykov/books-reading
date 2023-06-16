import * as yup from "yup";
// import { formPatterns, errorFormMessages } from "constants/";

export const addBookSchema = yup.object({
  title: yup.string().trim().min(2).max(255).required(),
  author: yup.string().trim().min(2).max(255).required(),
  publishYear: yup.string().required(),
  pagesTotal: yup.string().required(),
});
