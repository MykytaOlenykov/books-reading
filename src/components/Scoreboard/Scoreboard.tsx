import React from "react";
import {
  selectBooks,
  selectEndDate,
  selectStartDate,
} from "redux/planning/selectors";
import { useAppSelector } from "hooks";
import { dateDifferenceInDays } from "utils";
import * as S from "./Scoreboard.styled";

export const Scoreboard: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const startDate = useAppSelector(selectStartDate);
  const endDate = useAppSelector(selectEndDate);

  const days = dateDifferenceInDays(startDate, endDate);

  return (
    <S.Section>
      <S.Container>
        <S.Title>Моя мета прочитати</S.Title>

        <S.List>
          <li>
            <S.Counter>
              <S.Value>{books.length}</S.Value>
            </S.Counter>

            <S.Descr>Кількість книжок</S.Descr>
          </li>

          <li>
            <S.Counter>
              <S.Value>{days}</S.Value>
            </S.Counter>

            <S.Descr>Кількість днів</S.Descr>
          </li>
        </S.List>
      </S.Container>
    </S.Section>
  );
};
