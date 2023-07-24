import React from "react";
import * as S from "./LibraryContainer.styled";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const LibraryContainer: React.FC<IProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
