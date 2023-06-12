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

const initialValues = {
  email: "",
  password: "",
};

type FormData = yup.InferType<typeof schema>;

export const LogInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(console.log)}>
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
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
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
        {errors.password && (
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.Button type="submit">Увійти</S.Button>

      <S.FormText>
        <S.RedirectLink to="/register">Реєстрація</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
