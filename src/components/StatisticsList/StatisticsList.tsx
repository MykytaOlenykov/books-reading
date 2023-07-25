import React, { useMemo } from "react";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loader } from "components/Loaders";
import { selectIsLoading, selectStats } from "redux/statistics/selectors";
import { useAppSelector } from "hooks";
import * as S from "./StatisticsList.styled";

import "swiper/css";

interface IStatsList {
  _id: string;
  date: string;
  time: string;
  pages: number;
}

export const StatisticsList: React.FC = () => {
  const stats = useAppSelector(selectStats);
  const isLoading = useAppSelector(selectIsLoading);

  const statsList = useMemo<IStatsList[]>(
    () =>
      stats
        .flatMap((stat) =>
          stat.currentDateStats.map((currentDateStat) => ({
            _id: currentDateStat._id,
            date: format(new Date(stat.date), "dd.MM.yyyy"),
            time: currentDateStat.time.replaceAll("-", ":"),
            pages: currentDateStat.pagesRead,
          }))
        )
        .reverse(),
    [stats]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <S.Container>
      {<S.Title>Статистика</S.Title>}

      <S.SwiperContainer>
        <Swiper
          {...{
            slidesPerView: 5,
            spaceBetween: 4,
            direction: "vertical",
            breakpoints: {
              768: {
                slidesPerView: 10,
              },
              1312: {
                slidesPerView: 5,
              },
            },
          }}
        >
          {statsList.map(({ date, time, pages, _id }) => (
            <SwiperSlide key={_id}>
              <S.Item>
                <S.Date>{date}</S.Date>
                <S.Time>{time}</S.Time>
                <S.Pages>
                  <S.Value>{pages}</S.Value>
                  <S.Descr>стор.</S.Descr>
                </S.Pages>
              </S.Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperContainer>
    </S.Container>
  );
};
