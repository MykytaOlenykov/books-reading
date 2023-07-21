import React from "react";
import { bookStatuses } from "constants/";
import { IBookStatus } from "types";
import * as S from "./BookData.styled";

interface IProps {
  status: IBookStatus;
  author: string;
  publishYear: number;
  pagesTotal: number;
  pagesFinished: number;
}

export const BookData: React.FC<IProps> = ({
  status,
  author,
  publishYear,
  pagesTotal,
  pagesFinished,
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

    {status === bookStatuses.training && (
      <S.Item>
        <S.Title>Проч.:</S.Title>
        <S.Descr>{pagesFinished}</S.Descr>
      </S.Item>
    )}
  </S.List>
);
