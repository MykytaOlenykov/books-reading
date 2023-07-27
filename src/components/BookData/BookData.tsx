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
  rating: number | null;
}

export const BookData: React.FC<IProps> = ({
  status,
  author,
  publishYear,
  pagesTotal,
  pagesFinished,
  rating,
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

    {(status === bookStatuses.training ||
      status === bookStatuses.currentlyReading) && (
      <S.Item>
        <S.Title>Проч.:</S.Title>
        <S.Descr>{pagesFinished}</S.Descr>
      </S.Item>
    )}

    {status === bookStatuses.finishedReading && (
      <S.Item>
        <S.Title>Рейтинг:</S.Title>

        <S.Rating>
          {[1, 2, 3, 4, 5].map((idx) => (
            <S.IconThumb key={idx}>
              <S.Icon
                $isSelected={!!rating && rating >= idx}
                $isActive={!!rating}
              />
            </S.IconThumb>
          ))}
        </S.Rating>
      </S.Item>
    )}
  </S.List>
);
