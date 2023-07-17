import * as yup from "yup";
import { formPatterns, errorFormMessages } from "constants/";

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, errorFormMessages.name.minLength)
    .max(255, errorFormMessages.name.maxLength)
    .matches(formPatterns.name, errorFormMessages.name.matches)
    .required(errorFormMessages.name.required),
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
    .required(errorFormMessages.password.required),
  confirmPassword: yup
    .string()
    .test(
      "passwords-match",
      errorFormMessages.confirmPassword.test,
      function (value) {
        return this.parent.password === value;
      }
    )
    .required(errorFormMessages.confirmPassword.required),
});
