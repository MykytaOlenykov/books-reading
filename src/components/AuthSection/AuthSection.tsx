import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import * as S from "./AuthSection.styled";

interface IProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const AuthSection: React.FC<IProps> = ({ title, children }) => (
  <S.Section>
    <S.Container>
      <HiddenComponent>
        <h1>{title}</h1>
      </HiddenComponent>

      {children}
    </S.Container>
  </S.Section>
);
