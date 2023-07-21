import React from "react";
import * as S from "./Sidebar.styled";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Sidebar: React.FC<IProps> = ({ children }) => (
  <S.Aside>{children}</S.Aside>
);
