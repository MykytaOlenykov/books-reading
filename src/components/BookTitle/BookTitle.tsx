import React from "react";
import * as S from "./BookTitle.styled";
import { IBooksStatuses } from "types";

interface IProps {
  status: IBooksStatuses;
  title: string;
}

export const BookTitle: React.FC<IProps> = ({ status, title }) => (
  <S.Title className={status}>{title}</S.Title>
);
