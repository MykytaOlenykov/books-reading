import React from "react";
import { BookCard } from "components/BookCard";
import { BookPlaceholder } from "components/BookPlaceholder";
import { HiddenComponent } from "components/HiddenComponent";
import { useResizeScreen } from "hooks";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./TrainingBooksSection.styled";

export const TrainingBooksSection: React.FC = () => {
  const { isMobile } = useResizeScreen();

  return (
    <S.Section>
      <PrimaryContainer>
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
        <ul>
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
        </ul>

        {isMobile && <BookPlaceholder />}
      </PrimaryContainer>
    </S.Section>
  );
};
