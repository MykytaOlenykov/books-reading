import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import * as S from "./TrainingContainer.styled";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const TrainingContainer: React.FC<IProps> = ({ children }) => (
  <S.Container>
    <HiddenComponent>
      <h1>Сторінка тренування</h1>
    </HiddenComponent>

    {children}
  </S.Container>
);
