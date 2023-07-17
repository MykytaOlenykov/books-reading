import React from "react";
import { useAppDispatch } from "hooks";
import { deleteBook } from "redux/books/operations";
import { IBook, IBooksStatuses } from "types";
import * as S from "./BookCard.styled";

interface IProps {
  book: IBook;
  status: IBooksStatuses;
}

export const BookCard: React.FC<IProps> = ({ book, status }) => {
  const { _id, title, author, publishYear, pagesTotal } = book;
  const dispatch = useAppDispatch();

  const handleDeleteBook = (): void => {
    dispatch(deleteBook(_id));
  };

  return (
    <S.Card>
      <S.BookIcon />

      <S.CardTitle>{title}</S.CardTitle>
      <S.List>
        <S.Item>
          <S.Title>Автор:</S.Title>
          <S.Descr>{author}</S.Descr>
        </S.Item>

        <S.Item>
          <S.Title>Рік:</S.Title>
          <S.Descr>{publishYear}</S.Descr>
        </S.Item>

        <S.Item>
          <S.Title>Стор.:</S.Title>
          <S.Descr>{pagesTotal}</S.Descr>
        </S.Item>
      </S.List>

      {status === "goingToRead" && (
        <S.Button type="button" onClick={handleDeleteBook}>
          <S.BtnIcon />
        </S.Button>
      )}
    </S.Card>
  );
};
