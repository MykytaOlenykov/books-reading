import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useAppDispatch, useBooks } from "hooks";
import { addBook } from "redux/books/operations";
import { clearError } from "redux/books/slice";
import { errorAPIMessages } from "constants/";
import { addBookSchema } from "schemas";
import * as S from "./BookAddForm.styled";
import { IBook } from "types";

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
  const { goingToRead, currentlyReading, finishedReading, isError, isAdding } =
    useBooks();

  useEffect(() => {
    if (isError) {
      toast.error(errorAPIMessages.common);
      dispatch(clearError());
    }
  }, [isError, dispatch]);

  const onSubmit: SubmitHandler<FormData> = ({
    title,
    author,
    publishYear,
    pagesTotal,
  }) => {
    const newBook = {
      title: title.trim(),
      author: author.trim(),
      publishYear: Number(publishYear),
      pagesTotal: Number(pagesTotal),
    };

    const isValid = validationBook(newBook);

    if (!isValid) {
      toast.error("У вашій колекції вже є така книга.");
      return;
    }

    dispatch(addBook(newBook));
    reset();
  };

  const validationBook = (newBook: Omit<IBook, "_id" | "pagesFinished">) => {
    return ![...goingToRead, ...currentlyReading, ...finishedReading].some(
      ({ title, publishYear }) =>
        title === newBook.title && publishYear === newBook.publishYear
    );
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
