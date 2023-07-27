import * as yup from "yup";
import { schemaErrorMessages } from "constants/";

export const bookReviewSchema = yup.object({
  rating: yup
    .number()
    .typeError(schemaErrorMessages.rating.required)
    .required(schemaErrorMessages.rating.required),
  feedback: yup.string().trim().max(3000, schemaErrorMessages.feedback.max),
});
