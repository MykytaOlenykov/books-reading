import React from "react";
import { AuthSection } from "components/AuthSection";
import { LogInForm } from "components/AuthForms";
import { QuoteCard } from "components/QuoteCard";
import * as S from "./LogIn.styled";

const LogIn: React.FC = () => (
  <S.Main>
    <AuthSection title="Сторінка входу до профілю">
      <LogInForm />
    </AuthSection>

    <QuoteCard />
  </S.Main>
);

export default LogIn;
