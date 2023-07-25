import React, { useState, useEffect } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Sidebar } from "components/Sidebar";
import { TimeSection } from "components/TimeSection";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import { TimerBeforeStartTraining } from "components/TimerBeforeStartTraining";
import { CancelTrainingButton } from "components/CancelTrainingButton";
import { StatisticsSection } from "components/StatisticsSection";
import {
  selectBooks,
  selectStartDate,
  selectStatus,
} from "redux/planning/selectors";
import { useResizeScreen, useAppSelector } from "hooks";
import { bookStatuses, planningStatuses } from "constants/";
import * as S from "./TrainingSection.styled";

export const TrainingSection: React.FC = () => {
  const { isDesktop } = useResizeScreen();
  const books = useAppSelector(selectBooks);
  const status = useAppSelector(selectStatus);
  const startDate = useAppSelector(selectStartDate);
  const [isStartedTraining, setIsStartedTraining] = useState<boolean>(
    () => status !== planningStatuses.idle
  );

  const isShowCancelTrainingButton = status === planningStatuses.active;

  useEffect(() => {
    if (status === planningStatuses.active) {
      setIsStartedTraining(true);
    }
  }, [status]);

  return isStartedTraining ? (
    <S.Container>
      <div style={{ width: "100%" }}>
        <HiddenComponent>
          <h1>Сторінка тренування</h1>
        </HiddenComponent>

        <TimeSection />

        {isShowCancelTrainingButton && (
          <S.BtnContainer>
            <CancelTrainingButton />
          </S.BtnContainer>
        )}

        {!isDesktop && <Scoreboard />}

        <BooksList status={bookStatuses.training} books={books} />

        <StatisticsChart />

        {!isDesktop && <StatisticsSection />}
      </div>

      {isDesktop && (
        <Sidebar>
          <Scoreboard />
          <StatisticsSection />
        </Sidebar>
      )}
    </S.Container>
  ) : (
    <TimerBeforeStartTraining startDate={startDate!} />
  );
};
