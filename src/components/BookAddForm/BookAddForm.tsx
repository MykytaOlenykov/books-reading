import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "hooks";
import { addBook } from "redux/books/operations";
import { selectIsAdding } from "redux/books/selectors";
import { addBookSchema } from "schemas";
import * as S from "./BookAddForm.styled";

const initialValues = {
  title: "",
  author: "",
  publishYear: undefined,
  pagesTotal: undefined,
};

type FormData = {
  title: string;
  author: string;
  publishYear: number;
  pagesTotal: number;
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
  const isAdding = useAppSelector(selectIsAdding);

  const onSubmit: SubmitHandler<FormData> = async ({
    title,
    author,
    publishYear,
    pagesTotal,
  }) => {
    const newBook = {
      title: title.trim(),
      author: author.trim(),
      publishYear,
      pagesTotal,
    };

    const { meta } = await dispatch(addBook(newBook));

    if (meta.requestStatus === "fulfilled") {
      reset();
    }
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

      <S.Button type="submit" disabled={isAdding}>
        Додати
      </S.Button>
    </S.Form>
  );
};
