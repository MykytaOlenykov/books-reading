import React, { useMemo } from "react";
import { Loader } from "components/Loaders";
import { selectIsLoading, selectStats } from "redux/statistics/selectors";
import { useAppSelector } from "hooks";
import * as S from "./StatisticsList.styled";

interface IStatsList {
  date: string;
  time: string;
  pages: number;
}

export const StatisticsList: React.FC = () => {
  const stats = useAppSelector(selectStats);
  const isLoading = useAppSelector(selectIsLoading);

  const statsList = useMemo<IStatsList[]>(
    () =>
      stats.flatMap((stat) =>
        stat.currentDateStats.map((currentDateStat) => ({
          date: stat.date.replaceAll("-", "."),
          time: currentDateStat.time.replaceAll("-", ":"),
          pages: currentDateStat.pagesRead,
        }))
      ),
    [stats]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <S.Container>
      {<S.Title>Статистика</S.Title>}

      <ul>
        {statsList.map(({ date, time, pages }) => (
          <S.Item>
            <S.Date>{date}</S.Date>
            <S.Time>{time}</S.Time>
            <S.Pages>
              <S.Value>{pages}</S.Value>
              <S.Descr>стор.</S.Descr>
            </S.Pages>
          </S.Item>
        ))}
      </ul>
    </S.Container>
  );
};
