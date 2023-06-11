import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleBtn } from "components/GoogleBtn";
import { formPatterns, errorFormMessages } from "constants/";
import * as S from "./AuthForms.styled";

const schema = yup.object({
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
  email: "",
  password: "",
};

type FormData = yup.InferType<typeof schema>;

export const LogInForm: React.FC = () => {
  const { register } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  return (
    <S.Form noValidate autoComplete="off">
      <GoogleBtn />

      <S.Label>
        <S.LabelText>
          Електронна адреса <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
        />
      </S.Label>

      <S.Label>
        <S.LabelText>
          Пароль <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input
          {...register("password")}
          type="password"
          placeholder="Пароль"
        />
      </S.Label>

      <S.Button type="submit">Увійти</S.Button>

      <S.FormText>
        <S.RedirectLink to="/register">Реєстрація</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
