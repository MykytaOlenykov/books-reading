import React from "react";
import * as S from "./BookPlaceholder.styled";

export const BookPlaceholder: React.FC = () => (
  <S.BookCard>
    <S.BookIcon />

    <S.CardTitle>...</S.CardTitle>

    <S.List>
      <S.Item>
        <S.Title>Автор:</S.Title>
        <S.Descr>...</S.Descr>
      </S.Item>

      <S.Item>
        <S.Title>Рік:</S.Title>
        <S.Descr>...</S.Descr>
      </S.Item>

      <S.Item>
        <S.Title>Стор.:</S.Title>
        <S.Descr>...</S.Descr>
      </S.Item>
    </S.List>
  </S.BookCard>
);
