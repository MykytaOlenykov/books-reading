import React from "react";
import { Link } from "react-router-dom";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";
import { BookAddSection } from "components/BookAddSection";
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

      {!isMobile && <BookAddSection />}

      <Link to="/add-book">add-book</Link>
    </main>
  );
};

export default Library;
