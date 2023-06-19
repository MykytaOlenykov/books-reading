import React from "react";
import * as S from "./QuoteCard.styled";

export const QuoteCard: React.FC = () => (
  <S.Article>
    <S.Icon />
    <S.Text>
      Книги — это корабли мысли, странствующие по волнам времени и бережно
      несущие свой драгоценный груз от поколения к поколению.
    </S.Text>
    <S.Author>Бэкон Ф.</S.Author>
  </S.Article>
);
