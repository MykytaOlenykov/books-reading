import React, { useState, useRef, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { Timer } from "components/Timer";
import { FinishTrainingButton } from "components/FinishTrainingButton";
import { selectIsChangingStatus, selectStatus } from "redux/planning/selectors";
import { useAppSelector } from "hooks";
import { calcDurationTime } from "utils";
import { planningStatuses, defaultTime } from "constants/";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./TimerBeforeStartTraining.styled";

interface IProps {
  startDate: string;
}

export const TimerBeforeStartTraining: React.FC<IProps> = ({ startDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const status = useAppSelector(selectStatus);
  const isChangingStatus = useAppSelector(selectIsChangingStatus);
  const [isStopped, setIsStopped] = useState<boolean>(
    () => status !== planningStatuses.idle
  );
  const intervalId = useRef<NodeJS.Timer>();

  const time = isStopped
    ? defaultTime
    : calcDurationTime(currentDate, new Date(`${startDate}T00:00:00`));

  useEffect(() => {
    if (isStopped) {
      return;
    }

    intervalId.current = setInterval(() => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const currentDateUtc = zonedTimeToUtc(new Date(), timeZone);
      const startDateUtc = zonedTimeToUtc(
        new Date(`${startDate}T00:00:00`),
        timeZone
      );

      const difference = differenceInSeconds(startDateUtc, currentDateUtc);

      if (difference <= 0) {
        setIsStopped(true);
        clearInterval(intervalId.current);
      }

      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [startDate, isStopped]);

  return (
    <PrimaryContainer>
      <S.Container>
        <Timer time={time} title="До початку тренування залишилося" />
      </S.Container>

      {!isChangingStatus && (
        <S.BtnContainer>
          <FinishTrainingButton
            styleType="secondary"
            text="Скасувати тренування"
          />
        </S.BtnContainer>
      )}
    </PrimaryContainer>
  );
};
