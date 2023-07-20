import React from "react";
import { differenceInCalendarDays } from "date-fns";
import { usePlanning } from "hooks";
import * as S from "./Scoreboard.styled";

export const Scoreboard: React.FC = () => {
  const { books, startDate, endDate } = usePlanning();

  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  const days = (() => {
    if (!parsedStartDate || !parsedEndDate) {
      return 0;
    }

    return differenceInCalendarDays(parsedEndDate, parsedStartDate);
  })();

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
