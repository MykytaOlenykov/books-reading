import React from "react";
import * as S from "./Scoreboard.styled";

export const Scoreboard: React.FC = () => (
  <S.Section>
    <S.Container>
      <S.Title>Моя мета прочитати</S.Title>

      <S.List>
        <li>
          <S.Counter>
            <S.Value>0</S.Value>
          </S.Counter>

          <S.Descr>Кількість книжок</S.Descr>
        </li>

        <li>
          <S.Counter>
            <S.Value>0</S.Value>
          </S.Counter>

          <S.Descr>Кількість днів</S.Descr>
        </li>
      </S.List>
    </S.Container>
  </S.Section>
);
