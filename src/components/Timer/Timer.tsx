import React, { useRef, useEffect, useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import { useResizeScreen } from "hooks";
import { calcDurationTime } from "utils";

import * as S from "./Timer.styled";

interface IProps {
  endDate: Date;
  title?: string;
}

export const Timer: React.FC<IProps> = ({ endDate, title }) => {
  const { isMobile } = useResizeScreen();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const intervalId = useRef<NodeJS.Timer>();

  const { days, hours, minutes, seconds } = calcDurationTime(
    currentDate,
    endDate
  );

  const isLongValue = isMobile && days.toString().split("").length > 5;

  useEffect(() => {
    intervalId.current = setInterval(() => {
      const days = differenceInMilliseconds(endDate, new Date());

      if (days <= 0) {
        clearInterval(intervalId.current);
        return;
      }

      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [endDate]);

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.TimeContainer>
        {isLongValue && (
          <S.Item>
            <S.Value>{days}</S.Value>
            <S.Descr>дн</S.Descr>
          </S.Item>
        )}

        <S.List>
          {!isLongValue && (
            <>
              <S.Item>
                <S.Value>{days}</S.Value>
                <S.Descr>дн</S.Descr>
              </S.Item>

              <S.Separator>:</S.Separator>
            </>
          )}

          <S.Item>
            <S.Value>{hours}</S.Value>
            <S.Descr>год</S.Descr>
          </S.Item>

          <S.Separator>:</S.Separator>

          <S.Item>
            <S.Value>{minutes}</S.Value>
            <S.Descr>хв</S.Descr>
          </S.Item>

          <S.Separator>:</S.Separator>

          <S.Item>
            <S.Value>{seconds}</S.Value>
            <S.Descr>сек</S.Descr>
          </S.Item>
        </S.List>
      </S.TimeContainer>
    </S.Container>
  );
};
