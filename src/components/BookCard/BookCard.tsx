import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch, useBooks } from "hooks";
import { clearError } from "redux/books/slice";
import { deleteBook } from "redux/books/operations";
import { errorAPIMessages } from "constants/";
import { IBook } from "types";
import * as S from "./BookCard.styled";

interface IProps {
  book: IBook;
  status: "goingToRead" | "currentlyReading" | "finishedReading";
}

export const BookCard: React.FC<IProps> = ({ book, status }) => {
  const { _id, title, author, publishYear, pagesTotal } = book;
  const { isError } = useBooks();
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      setIsDeleting(false);
      toast.error(errorAPIMessages.common);
      dispatch(clearError());
    }
  }, [isError, dispatch]);

  const handleDeleteBook = (): void => {
    setIsDeleting(true);
    dispatch(deleteBook(_id));
  };

  return (
    <S.Card>
      <S.BookIcon />

      {status === "goingToRead" && (
        <S.Button
          type="button"
          onClick={handleDeleteBook}
          disabled={isDeleting}
        >
          <S.BtnIcon />
        </S.Button>
      )}

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
    </S.Card>
  );
};
