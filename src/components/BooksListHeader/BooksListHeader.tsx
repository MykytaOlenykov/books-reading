import React from "react";
import { IBooksStatuses } from "types";
import * as S from "./BooksListHeader.styled";

interface IProps {
  status: IBooksStatuses;
}

export const BooksListHeader: React.FC<IProps> = ({ status }) => (
  <S.List className={status}>
    <S.Item>
      <S.Text>Назва книги</S.Text>
    </S.Item>
    <S.Item>
      <S.Text>Автор</S.Text>
    </S.Item>
    <S.Item>
      <S.Text>Рік</S.Text>
    </S.Item>
    <S.Item>
      <S.Text>Стор.</S.Text>
    </S.Item>
  </S.List>
);
