import React from "react";
import * as S from "./NotFound.styled";

export const NotFound: React.FC = () => (
  <S.Container>
    <S.ErrorMessage>Сторінка не знайдена</S.ErrorMessage>
    <S.ErrorCode>404</S.ErrorCode>
    <S.HomePageLink to="/">Перейти на головну сторінку</S.HomePageLink>
  </S.Container>
);
