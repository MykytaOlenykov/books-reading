import React, { useMemo } from "react";
import { Checkbox } from "components/Checkbox";
import { BookTitle } from "components/BookTitle";
import { BookData } from "components/BookData";
import { useBooks, usePlanning } from "hooks";
import { bookStatuses } from "constants/";
import { IBook, IBookStatus } from "types";
import * as S from "./BookCard.styled";

interface IProps {
  book: IBook;
  status: IBookStatus;
  isDeleting?: string[] | undefined;
  onDeleteBook?: (bookId: string) => void;
}

export const BookCard: React.FC<IProps> = ({
  book,
  status,
  isDeleting = [],
  onDeleteBook,
}) => {
  const { _id, title, author, publishYear, pagesTotal, pagesFinished } = book;
  const { books, finishedBooks } = usePlanning();

  const isShowBtn =
    status === bookStatuses.goingToRead
      ? !books.includes(_id)
      : status === bookStatuses.planning;

  const isDisabled = isDeleting.includes(_id);

  const handleDeleteBook = () => {
    onDeleteBook?.(_id);
  };

  return (
    <S.Card className={status}>
      <S.BookIcon />

      {status === bookStatuses.training && (
        <Checkbox checked={finishedBooks.includes(_id)} />
      )}

      <BookTitle status={status} title={title} />

      <BookData
        status={status}
        author={author}
        publishYear={publishYear}
        pagesTotal={pagesTotal}
        pagesFinished={pagesFinished}
      />

      {isShowBtn && (
        <S.Button
          type="button"
          onClick={handleDeleteBook}
          disabled={isDisabled}
        >
          <S.BtnIcon />
        </S.Button>
      )}
    </S.Card>
  );
};
