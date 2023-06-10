import React from "react";
import * as S from "./HiddenComponent.styled";

interface IProps {
  children: React.ReactNode;
}

export const HiddenComponent: React.FC<IProps> = ({ children }) => (
  <S.HiddenContainer>{children}</S.HiddenContainer>
);
