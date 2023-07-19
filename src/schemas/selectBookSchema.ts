import * as yup from "yup";
import { errorFormMessages } from "constants/";

export const selectBookSchema = yup.object({
  book: yup.string().required(errorFormMessages.book.required),
});
