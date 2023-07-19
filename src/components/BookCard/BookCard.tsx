import React from "react";
import { BookTitle } from "components/BookTitle";
import { BookData } from "components/BookData";
import { usePlanning } from "hooks";
import { IBook, IBooksStatuses } from "types";
import * as S from "./BookCard.styled";

interface IProps {
  book: IBook;
  status: IBooksStatuses;
  isDeleting?: string[] | undefined;
  onDeleteBook?: (bookId: string) => void;
}

export const BookCard: React.FC<IProps> = ({
  book,
  status,
  isDeleting = [],
  onDeleteBook,
}) => {
  const { _id, title, author, publishYear, pagesTotal } = book;
  const { books } = usePlanning();

  const isShowBtn =
    status === "goingToRead" ? !books.includes(_id) : status === "training";

  const isDisabled = isDeleting.includes(_id);

  const handleDeleteBook = () => {
    onDeleteBook?.(_id);
  };

  return (
    <S.Card className={status}>
      <S.BookIcon />

      <BookTitle status={status} title={title} />

      <BookData
        status={status}
        author={author}
        publishYear={publishYear}
        pagesTotal={pagesTotal}
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
