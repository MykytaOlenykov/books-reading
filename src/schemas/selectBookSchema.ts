import * as yup from "yup";
import { errorFormMessages } from "constants/";

export const selectBookSchema = yup.object({
  book: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nonNullable()
    .required(),
});
