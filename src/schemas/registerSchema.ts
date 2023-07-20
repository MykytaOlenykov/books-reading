import * as yup from "yup";
import { schemaPatterns, schemaErrorMessages } from "constants/";

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, schemaErrorMessages.name.minLength)
    .max(255, schemaErrorMessages.name.maxLength)
    .matches(schemaPatterns.name, schemaErrorMessages.name.matches)
    .required(schemaErrorMessages.name.required),
  email: yup
    .string()
    .min(4, schemaErrorMessages.email.minLength)
    .max(255, schemaErrorMessages.email.maxLength)
    .matches(schemaPatterns.email, schemaErrorMessages.email.matches)
    .required(schemaErrorMessages.email.required),
  password: yup
    .string()
    .min(8, schemaErrorMessages.password.minLength)
    .max(255, schemaErrorMessages.password.maxLength)
    .required(schemaErrorMessages.password.required),
  confirmPassword: yup
    .string()
    .test(
      "passwords-match",
      schemaErrorMessages.confirmPassword.test,
      function (value) {
        return this.parent.password === value;
      }
    )
    .required(schemaErrorMessages.confirmPassword.required),
});
