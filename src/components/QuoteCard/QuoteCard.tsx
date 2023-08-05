import React from "react";
import * as S from "./QuoteCard.styled";

export const QuoteCard: React.FC = () => (
  <S.Article>
    <S.Icon />
    <S.Text>
      Книги - це кораблі думки, що странствують по хвилях часу й обережно несуть
      свій коштовний вантаж від покоління до покоління.
    </S.Text>
    <S.Author>Бекон Ф.</S.Author>
  </S.Article>
);
