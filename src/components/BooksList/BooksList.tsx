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
  isDeleting?: string[] | undefined;
  onDeleteBook?: (bookId: string) => void;
}

export const BooksList: React.FC<IProps> = ({
  title,
  status,
  books,
  isPlaceholder = false,
  isDeleting,
  onDeleteBook,
}) => {
  const { isMobile } = useResizeScreen();

  const isShowPlaceholder = isPlaceholder && books.length === 0 && isMobile;

  return (
    <S.Section className={status}>
      {title && <S.Title>{title}</S.Title>}

      <BooksListHeader status={status} />

      <S.List $isShowPlaceholder={isShowPlaceholder}>
        {books.map((book) => (
          <S.Item key={book._id}>
            <BookCard
              book={book}
              status={status}
              isDeleting={isDeleting}
              onDeleteBook={onDeleteBook}
            />
          </S.Item>
        ))}
        {isPlaceholder && !isMobile && (
          <S.Item>
            <BookPlaceholder />
          </S.Item>
        )}
      </S.List>

      {isShowPlaceholder && <BookPlaceholder />}
    </S.Section>
  );
};
