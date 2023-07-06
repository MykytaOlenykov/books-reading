import React from "react";
import { BookCard } from "components/BookCard";
import { BookPlaceholder } from "components/BookPlaceholder";
import { HiddenComponent } from "components/HiddenComponent";
import { useResizeScreen } from "hooks";
import * as S from "./TrainingBooksSection.styled";

export const TrainingBooksSection: React.FC = () => {
  const { isMobile } = useResizeScreen();

  return (
    <S.Section>
      <HiddenComponent>
        <h2>Вибрані книги</h2>
      </HiddenComponent>
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

      <S.List>
        {/* {books.map((book) => (
            <S.Item key={book._id}>
              <BookCard book={book} status={status} />
            </S.Item>
          ))} */}
        {!isMobile && (
          <S.Item>
            <BookPlaceholder />
          </S.Item>
        )}
      </S.List>

      {isMobile && <BookPlaceholder />}
    </S.Section>
  );
};
