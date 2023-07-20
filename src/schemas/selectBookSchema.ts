import * as yup from "yup";
import { schemaErrorMessages } from "constants/";

export const selectBookSchema = yup.object({
  book: yup.string().required(schemaErrorMessages.book.required),
});
