import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";
import { BookAddSection } from "components/BookAddSection";
import { LibraryBooksSection } from "components/LibraryBooksSection";
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
          <S.Info>Додайте книжки, які маєте намір прочитати.</S.Info>
        )}
      </PrimaryContainer>

      {isMobile ? <RedirectBtn redirectTo="add-book" /> : <BookAddSection />}

      {!!finishedReading.length && (
        <LibraryBooksSection title="Прочитано" status="finishedReading" />
      )}

      {!!currentlyReading.length && (
        <LibraryBooksSection title="Читаю" status="currentlyReading" />
      )}

      {!!goingToRead.length && (
        <LibraryBooksSection title="Маю намір прочитати" status="goingToRead" />
      )}
    </main>
  );
};

export default Library;
