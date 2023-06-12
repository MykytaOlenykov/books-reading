import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAuth } from "hooks";
import { register as registerUser } from "redux/auth/operations";
import { clearError } from "redux/auth/slice";
import { GoogleBtn } from "components/GoogleBtn";
import { formPatterns, errorFormMessages, errorAPIMessages } from "constants/";
import * as S from "./AuthForms.styled";

const schema = yup.object({
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
    .matches(formPatterns.password, errorFormMessages.password.matches)
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

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FormData = yup.InferType<typeof schema>;

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const { isError, error } = useAuth();

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

  const onSubmit: SubmitHandler<FormData> = ({ name, email, password }) => {
    const normalizedName = name.trim();

    dispatch(registerUser({ name: normalizedName, email, password }));
    reset();
  };

  return (
    <S.Form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <GoogleBtn />

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

      <S.Button type="submit">Зареєструватися</S.Button>

      <S.FormText>
        Вже з нами? <S.RedirectLink to="/login">Увійти</S.RedirectLink>
      </S.FormText>
    </S.Form>
  );
};
