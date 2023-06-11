import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { LogInForm } from "components/AuthForms";
import { QuoteCard } from "components/QuoteCard";
import * as S from "./LogIn.styled";

const LogIn: React.FC = () => (
  <S.Main>
    <S.Section>
      <S.Container>
        <HiddenComponent>
          <h1>Сторінка входу до профілю</h1>
        </HiddenComponent>

        <LogInForm />
      </S.Container>
    </S.Section>

    <QuoteCard />
  </S.Main>
);

export default LogIn;
