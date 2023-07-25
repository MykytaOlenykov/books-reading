import React, { useState, useRef, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { Timer } from "components/Timer";
import { CancelTrainingButton } from "components/CancelTrainingButton";
import { calcDurationTime } from "utils";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./TimerBeforeStartTraining.styled";

interface IProps {
  startDate: string;
}

export const TimerBeforeStartTraining: React.FC<IProps> = ({ startDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const intervalId = useRef<NodeJS.Timer>();

  const time = calcDurationTime(currentDate, new Date(`${startDate}T00:00:00`));

  useEffect(() => {
    intervalId.current = setInterval(() => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const currentDateUtc = zonedTimeToUtc(new Date(), timeZone);
      const startDateUtc = zonedTimeToUtc(
        new Date(`${startDate}T00:00:00`),
        timeZone
      );

      const difference = differenceInSeconds(startDateUtc, currentDateUtc);

      if (difference <= 0) {
        clearInterval(intervalId.current);
      }

      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [startDate]);

  return (
    <PrimaryContainer>
      <S.Container>
        <Timer time={time} title="До початку тренування залишилося" />
      </S.Container>

      <CancelTrainingButton />
    </PrimaryContainer>
  );
};
