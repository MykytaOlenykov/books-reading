import React from "react";
import { bookStatuses } from "constants/";
import { IBookStatus } from "types";
import * as S from "./BooksListHeader.styled";

interface IProps {
  status: IBookStatus;
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

    {(status === bookStatuses.training ||
      status === bookStatuses.currentlyReading) && (
      <S.Item>
        <S.Text>Проч.</S.Text>
      </S.Item>
    )}

    {status === bookStatuses.finishedReading && (
      <S.Item>
        <S.Text>Рейтинг</S.Text>
      </S.Item>
    )}
  </S.List>
);
