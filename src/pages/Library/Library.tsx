import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";

const Library: React.FC = () => (
  <main>
    <PrimaryContainer>
      <HiddenComponent>
        <h1>Бібліотека книг</h1>
      </HiddenComponent>
    </PrimaryContainer>
  </main>
);

export default Library;
