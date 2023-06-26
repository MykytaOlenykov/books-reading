import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";
import { BookAddSection } from "components/BookAddSection";
import { RedirectBtn } from "components/RedirectBtn";
import { useResizeScreen } from "hooks";

const Library: React.FC = () => {
  const { isMobile } = useResizeScreen();

  return (
    <main>
      <PrimaryContainer>
        <HiddenComponent>
          <h1>Бібліотека книг</h1>
        </HiddenComponent>
      </PrimaryContainer>

      {isMobile ? <RedirectBtn redirectTo="/add-book" /> : <BookAddSection />}
    </main>
  );
};

export default Library;
