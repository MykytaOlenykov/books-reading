import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useAppDispatch, useUserData } from "hooks";
import { register as registerUser } from "redux/auth/operations";
import { clearError, clearIsRegistered } from "redux/slice";
import { errorAPIMessages } from "constants/";
import { registerSchema } from "schemas";
import * as S from "./AuthForms.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FormData = yup.InferType<typeof registerSchema>;

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(registerSchema),
  });
  const dispatch = useAppDispatch();
  const { userData, isRegistered, isLoading, isError, error } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      if (error.status === 409) {
        toast.error(errorAPIMessages[error.status]);
        dispatch(clearError());
        return;
      }

      toast.error(errorAPIMessages.common);
      dispatch(clearError());
    }
  }, [isError, error, dispatch]);

  useEffect(() => {
    if (isRegistered) {
      navigate("/login", { state: { email: userData.email } });
      dispatch(clearIsRegistered());
    }
  }, [userData, isRegistered, navigate, dispatch]);

  const onSubmit: SubmitHandler<FormData> = ({ name, email, password }) => {
    const normalizedName = name.trim();

    dispatch(registerUser({ name: normalizedName, email, password }));
    reset();
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <S.Label>
        <S.LabelText>
          Ім’я <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input {...register("name")} type="text" placeholder="..." />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
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
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.LabelText>
          Пароль <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input {...register("password")} type="password" placeholder="..." />
        {errors.password && (
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.Label>
        <S.LabelText>
          Підтвердити пароль <S.Star>*</S.Star>
        </S.LabelText>
        <S.Input
          {...register("confirmPassword")}
          type="password"
          placeholder="..."
        />
        {errors.confirmPassword && (
          <S.ErrorText>{errors.confirmPassword?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.Button type="submit" disabled={isLoading}>
        Зареєструватися
      </S.Button>

      <S.FormText>
        Вже з нами? <S.RedirectLink to="/login">Увійти</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
