import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAuth } from "hooks";
import { logIn as logInUser } from "redux/auth/operations";
import { clearError } from "redux/auth/slice";
import { GoogleBtn } from "components/GoogleBtn";
import { errorAPIMessages } from "constants/";
import { logInSchema } from "schemas";
import * as S from "./AuthForms.styled";

const initialValues = {
  email: "",
  password: "",
};

type FormData = yup.InferType<typeof logInSchema>;

export const LogInForm: React.FC = () => {
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { ...initialValues, email: state?.email ?? "" },
    resolver: yupResolver(logInSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, isError, error } = useAuth();

  useEffect(() => {
    if (isError) {
      if (error.status === 403) {
        toast.error(errorAPIMessages[error.status]);
        dispatch(clearError());
        return;
      }

      toast.error(errorAPIMessages.common);
      dispatch(clearError());
    }
  }, [isError, error, dispatch]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(logInUser(data));
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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

      <S.Button type="submit" disabled={isLoading}>
        Увійти
      </S.Button>

      <S.FormText>
        <S.RedirectLink to="/register">Реєстрація</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
