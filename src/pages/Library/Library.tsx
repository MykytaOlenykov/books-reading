import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";
import { BookAddSection } from "components/BookAddSection";
import { BooksList } from "components/BooksList";
import { RedirectBtn } from "components/RedirectBtn";
import { useResizeScreen, useBooks } from "hooks";
import * as S from "./Library.styled";

const Library: React.FC = () => {
  const { isMobile } = useResizeScreen();
  const { goingToRead, currentlyReading, finishedReading, isFirstVisit } =
    useBooks();

  return (
    <main>
      <PrimaryContainer>
        <HiddenComponent>
          <h1>Бібліотека книг</h1>
        </HiddenComponent>

        {isMobile && isFirstVisit && (
          <S.Info>Додайте книги, які маєте намір прочитати.</S.Info>
        )}

        {isMobile ? <RedirectBtn redirectTo="add-book" /> : <BookAddSection />}

        {!!finishedReading.length && (
          <BooksList
            title="Прочитано"
            status="finishedReading"
            books={finishedReading}
          />
        )}

        {!!currentlyReading.length && (
          <BooksList
            title="Читаю"
            status="currentlyReading"
            books={currentlyReading}
          />
        )}

        {!!goingToRead.length && (
          <BooksList
            title="Маю намір прочитати"
            status="goingToRead"
            books={goingToRead}
          />
        )}
      </PrimaryContainer>
    </main>
  );
};

export default Library;
