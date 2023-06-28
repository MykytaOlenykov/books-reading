import React from "react";
import { PrimaryContainer } from "components/Common.styled";
import { BookCard } from "components/BookCard";
import { useBooks } from "hooks";
import * as S from "./BooksSection.styled";
import { IBook } from "types";

interface IProps {
  title: string;
  status: "goingToRead" | "currentlyReading" | "finishedReading";
}

export const BooksSection: React.FC<IProps> = ({ title, status }) => {
  const books = useBooks()[
    status as keyof ReturnType<typeof useBooks>
  ] as IBook[];

  return (
    <S.Section className={status}>
      <PrimaryContainer>
        <S.Title>{title}</S.Title>

        <S.Header>
          <S.HeaderItem>
            <S.Text>Назва книги</S.Text>
          </S.HeaderItem>
          <S.HeaderItem>
            <S.Text>Автор</S.Text>
          </S.HeaderItem>
          <S.HeaderItem>
            <S.Text>Рік</S.Text>
          </S.HeaderItem>
          <S.HeaderItem>
            <S.Text>Стор.</S.Text>
          </S.HeaderItem>
        </S.Header>

        <ul>
          {books.map((book) => (
            <S.Item key={book._id}>
              <BookCard book={book} status={status} />
            </S.Item>
          ))}
        </ul>
      </PrimaryContainer>
    </S.Section>
  );
};
