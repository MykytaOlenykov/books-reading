import React from "react";
import { BookCard } from "components/BookCard";
import { BookPlaceholder } from "components/BookPlaceholder";
import { BooksListHeader } from "components/BooksListHeader";
import { useResizeScreen } from "hooks";
import { IBook, IBooksStatuses } from "types";
import * as S from "./BooksList.styled";

interface IProps {
  status: IBooksStatuses;
  books: IBook[];
  title?: string;
  isPlaceholder?: boolean;
}

export const BooksList: React.FC<IProps> = ({
  title,
  status,
  books,
  isPlaceholder = false,
}) => {
  const { isMobile } = useResizeScreen();

  return (
    <S.Section className={status}>
      {title && <S.Title>{title}</S.Title>}

      <BooksListHeader status={status} />

      <S.List>
        {books.map((book) => (
          <S.Item key={book._id}>
            <BookCard book={book} status={status} />
          </S.Item>
        ))}
        {isPlaceholder && !isMobile && (
          <S.Item>
            <BookPlaceholder />
          </S.Item>
        )}
      </S.List>

      {isPlaceholder && isMobile && <BookPlaceholder />}
    </S.Section>
  );
};
