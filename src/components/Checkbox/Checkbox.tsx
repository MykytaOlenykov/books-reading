import React from "react";
import * as S from "./Checkbox.styled";

interface IProps {
  checked: boolean;
}

export const Checkbox: React.FC<IProps> = ({ checked }) => (
  <S.Box $checked={checked}>{checked && <S.Icon />}</S.Box>
);
