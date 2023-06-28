import React from "react";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./Scoreboard.styled";

export const Scoreboard: React.FC = () => (
  <S.Section>
    <PrimaryContainer>
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
    </PrimaryContainer>
  </S.Section>
);
