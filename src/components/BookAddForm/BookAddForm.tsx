import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAuth } from "hooks";
import { addBook } from "redux/book/operations";
import { errorAPIMessages } from "constants/";
import { addBookSchema } from "schemas";
import * as S from "./BookAddForm.styled";

const initialValues = {
  title: "",
  author: "",
  publishYear: "",
  pagesTotal: "",
};

type FormData = {
  title: string;
  author: string;
  publishYear: string | number;
  pagesTotal: string | number;
};

export const BookAddForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(addBookSchema),
  });
  const dispatch = useAppDispatch();
  const isLoading = false;

  // useEffect(() => {
  //   if (isError) {
  //     if (error.status === 409) {
  //       toast.error(errorAPIMessages[error.status]);
  //       dispatch(clearError());
  //       return;
  //     }

  //     toast.error(errorAPIMessages.common);
  //     dispatch(clearError());
  //   }
  // }, [isError, error, dispatch]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Label>
          <S.LabelText>Назва книги</S.LabelText>
          <S.Input {...register("title")} type="text" placeholder="..." />
          {errors.title && <S.ErrorText>{errors.title?.message}</S.ErrorText>}
        </S.Label>

        <S.Label>
          <S.LabelText>Автор книги</S.LabelText>
          <S.Input {...register("author")} type="text" placeholder="..." />
          {errors.author && <S.ErrorText>{errors.author?.message}</S.ErrorText>}
        </S.Label>

        <S.Label>
          <S.LabelText>Рік випуску</S.LabelText>
          <S.Input
            {...register("publishYear")}
            type="number"
            placeholder="..."
          />
          {errors.publishYear && (
            <S.ErrorText>{errors.publishYear?.message}</S.ErrorText>
          )}
        </S.Label>

        <S.Label>
          <S.LabelText>Кількість сторінок</S.LabelText>
          <S.Input
            {...register("pagesTotal")}
            type="number"
            placeholder="..."
          />
          {errors.pagesTotal && (
            <S.ErrorText>{errors.pagesTotal?.message}</S.ErrorText>
          )}
        </S.Label>
      </S.Container>

      <S.Button type="submit" disabled={isLoading}>
        Додати
      </S.Button>
    </S.Form>
  );
};
