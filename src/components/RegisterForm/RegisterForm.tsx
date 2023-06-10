import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleBtn } from "components/GoogleBtn";
import { formPatterns, errorFormMessages } from "constants/";
// import * as S from "./RegisterForm.styled";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(4)
    .max(255)
    .matches(formPatterns.name, errorFormMessages.name)
    .required(),
  email: yup
    .string()
    .min(4)
    .max(255)
    .matches(formPatterns.email, errorFormMessages.email)
    .required(),
  password: yup
    .string()
    .min(8)
    .max(255)
    .matches(formPatterns.password, errorFormMessages.password)
    .required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

type FormData = yup.InferType<typeof schema>;

export const RegisterForm: React.FC = () => {
  const { register } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  return (
    <form noValidate autoComplete="off">
      <GoogleBtn />

      <label>
        <span>
          Ім’я <span>*</span>
        </span>
        <input {...register("name")} type="text" placeholder="..." />
      </label>

      <label>
        <span>
          Електронна адреса <span>*</span>
        </span>
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
        />
      </label>

      <label>
        <span>
          Пароль <span>*</span>
        </span>
        <input {...register("password")} type="password" placeholder="..." />
      </label>

      <label>
        <span>
          Підтвердити пароль <span>*</span>
        </span>
        <input {...register("password")} type="password" placeholder="..." />
      </label>

      <button type="submit">Зареєструватися</button>

      <p>
        Вже з нами?
        {/* <a href="#">Увійти</a> */}
      </p>
    </form>
  );
};
