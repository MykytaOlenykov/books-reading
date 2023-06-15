import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { LogInForm } from "components/AuthForms";
import { QuoteCard } from "components/QuoteCard";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./LogIn.styled";

const LogIn: React.FC = () => (
  <S.Main>
    <S.Section>
      <PrimaryContainer>
        <HiddenComponent>
          <h1>Сторінка входу до профілю</h1>
        </HiddenComponent>

        <LogInForm />
      </PrimaryContainer>
    </S.Section>

    <QuoteCard />
  </S.Main>
);

export default LogIn;
