import React from "react";
import * as S from "./ModalText.styled";

interface IProps {
  text: string;
}

export const ModalText: React.FC<IProps> = ({ text }) => (
  <S.Text>{text}</S.Text>
);
