import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiddenComponent } from "components/HiddenComponent";
import { Select } from "components/Select";
import * as S from "./BookSelectForm.styled";

const initialValues = {
  books: "",
};

type FormData = {
  books: string;
};

export const BookSelectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <HiddenComponent>
        <select {...register("books")}></select>
      </HiddenComponent>

      <Select />

      {errors.books && <S.ErrorText>{errors.books?.message}</S.ErrorText>}

      <S.Button type="submit" disabled={true}>
        Додати
      </S.Button>
    </S.Form>
  );
};
