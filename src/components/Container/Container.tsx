import React from "react";
import * as S from "./Container.styled";

interface IProps {
  children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
