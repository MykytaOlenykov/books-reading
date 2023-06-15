import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Tutorial } from "components/Tutorial";
import { PrimaryContainer } from "components/Common.styled";

const Library: React.FC = () => (
  <main>
    <PrimaryContainer>
      <HiddenComponent>
        <h1>Бібліотека книг</h1>
      </HiddenComponent>

      <Tutorial />
    </PrimaryContainer>
  </main>
);

export default Library;
