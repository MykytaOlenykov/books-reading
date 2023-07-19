import React from "react";
import { IBooksStatuses } from "types";
import * as S from "./BookData.styled";

interface IProps {
  status: IBooksStatuses;
  author: string;
  publishYear: number;
  pagesTotal: number;
}

export const BookData: React.FC<IProps> = ({
  status,
  author,
  publishYear,
  pagesTotal,
}) => (
  <S.List className={status}>
    <S.Item>
      <S.Title>Автор:</S.Title>
      <S.Descr>{author}</S.Descr>
    </S.Item>

    <S.Item>
      <S.Title>Рік:</S.Title>
      <S.Descr>{publishYear}</S.Descr>
    </S.Item>

    <S.Item>
      <S.Title>Стор.:</S.Title>
      <S.Descr>{pagesTotal}</S.Descr>
    </S.Item>
  </S.List>
);
