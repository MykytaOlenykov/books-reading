import React from "react";
import { Checkbox } from "components/Checkbox";
import { BookTitle } from "components/BookTitle";
import { BookData } from "components/BookData";
import { selectBooks, selectFinishedBooks } from "redux/planning/selectors";
import { useAppSelector } from "hooks";
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
  const books = useAppSelector(selectBooks);
  const finishedBooks = useAppSelector(selectFinishedBooks);

  const isShowBtn =
    status === bookStatuses.goingToRead
      ? !books.some((book) => book._id === _id)
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
