import React from "react";
import {
  selectBooks,
  selectEndDate,
  selectFinishedBooks,
  selectStatus,
  selectStartDate,
} from "redux/planning/selectors";
import { useAppSelector } from "hooks";
import { dateDifferenceInDays } from "utils";
import { planningStatuses } from "constants/";
import * as S from "./Scoreboard.styled";

export const Scoreboard: React.FC = () => {
  const books = useAppSelector(selectBooks);
  const startDate = useAppSelector(selectStartDate);
  const endDate = useAppSelector(selectEndDate);
  const finishedBooks = useAppSelector(selectFinishedBooks);
  const status = useAppSelector(selectStatus);

  const isShowHowMuchToRead = !!status && status !== planningStatuses.idle;

  const days = dateDifferenceInDays(startDate, endDate);

  return (
    <S.Section className={isShowHowMuchToRead ? "isActive" : ""}>
      <S.Container>
        <S.Title>Моя мета прочитати</S.Title>

        <S.List>
          <S.Item>
            <S.Counter>
              <S.Value>{books.length}</S.Value>
            </S.Counter>

            <S.Descr>Кількість книжок</S.Descr>
          </S.Item>

          <S.Item>
            <S.Counter>
              <S.Value>{days}</S.Value>
            </S.Counter>

            <S.Descr>Кількість днів</S.Descr>
          </S.Item>

          {isShowHowMuchToRead && (
            <S.Item>
              <S.Counter>
                <S.Value $isAccent={isShowHowMuchToRead}>
                  {books.length - finishedBooks.length}
                </S.Value>
              </S.Counter>

              <S.Descr>Залишилось книжок</S.Descr>
            </S.Item>
          )}
        </S.List>
      </S.Container>
    </S.Section>
  );
};
