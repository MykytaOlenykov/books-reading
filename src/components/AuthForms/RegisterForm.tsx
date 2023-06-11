import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoogleBtn } from "components/GoogleBtn";
import { formPatterns, errorFormMessages } from "constants/";
import * as S from "./AuthForms.styled";

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
    <S.Form noValidate autoComplete="off">
      <GoogleBtn />

      <S.Label>
        <S.LabelText>
          Ім’я <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input {...register("name")} type="text" placeholder="..." />
      </S.Label>

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
        <S.Input {...register("password")} type="password" placeholder="..." />
      </S.Label>

      <S.Label>
        <S.LabelText>
          Підтвердити пароль <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input {...register("password")} type="password" placeholder="..." />
      </S.Label>

      <S.Button type="submit">Зареєструватися</S.Button>

      <S.FormText>
        Вже з нами? <S.RedirectLink to="/login">Увійти</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
