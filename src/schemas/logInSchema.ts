import * as yup from "yup";
import { formPatterns, errorFormMessages } from "constants/";

export const logInSchema = yup.object({
  email: yup
    .string()
    .min(4, errorFormMessages.email.minLength)
    .max(255, errorFormMessages.email.maxLength)
    .matches(formPatterns.email, errorFormMessages.email.matches)
    .required(errorFormMessages.email.required),
  password: yup
    .string()
    .min(8, errorFormMessages.password.minLength)
    .max(255, errorFormMessages.password.maxLength)
    .matches(formPatterns.password, errorFormMessages.password.matches)
    .required(errorFormMessages.password.required),
});
