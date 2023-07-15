import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import * as S from "./AuthSection.styled";

interface IProps {
  title: string;
  form: React.FC;
  children: React.ReactNode | React.ReactNode[];
}

export const AuthSection: React.FC<IProps> = ({
  title,
  form: Form,
  children,
}) => (
  <S.Container>
    <S.Section>
      <S.FormContainer>
        <HiddenComponent>
          <h1>{title}</h1>
        </HiddenComponent>

        <Form />
      </S.FormContainer>
    </S.Section>

    {children}
  </S.Container>
);
