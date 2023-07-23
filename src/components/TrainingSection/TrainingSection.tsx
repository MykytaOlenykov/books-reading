import React, { useMemo, useState } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Sidebar } from "components/Sidebar";
import { TimeSection } from "components/TimeSection";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import {
  selectCurrentlyReading,
  selectGoingToRead,
} from "redux/books/selectors";
import { selectBooks, selectStartDate } from "redux/planning/selectors";
import { useResizeScreen, useAppSelector } from "hooks";
import { dateDifferenceInDays } from "utils";
import { bookStatuses } from "constants/";
import { IBook } from "types";
import * as S from "./TrainingSection.styled";
import { TimerBeforeStartTraining } from "components/TimerBeforeStartTraining";

export const TrainingSection: React.FC = () => {
  const { isDesktop } = useResizeScreen();
  const goingToRead = useAppSelector(selectGoingToRead);
  const currentlyReading = useAppSelector(selectCurrentlyReading);
  const books = useAppSelector(selectBooks);
  const startDate = useAppSelector(selectStartDate);
  const [isStartedTraining, setIsStartedTraining] = useState<boolean>(
    () => dateDifferenceInDays(new Date().toString(), startDate) === 0
  );

  const visibledBooks = useMemo<IBook[]>(
    () =>
      [...goingToRead, ...currentlyReading].filter((book) =>
        books.includes(book._id)
      ),
    [goingToRead, currentlyReading, books]
  );

  const handleStartTraining = () => {
    setIsStartedTraining(true);
  };

  return isStartedTraining ? (
    <S.Container>
      <div style={{ width: "100%" }}>
        <HiddenComponent>
          <h1>Сторінка тренування</h1>
        </HiddenComponent>

        <TimeSection />

        {!isDesktop && <Scoreboard />}

        <BooksList status={bookStatuses.training} books={visibledBooks} />

        <StatisticsChart />
      </div>

      {isDesktop && (
        <Sidebar>
          <Scoreboard />
        </Sidebar>
      )}
    </S.Container>
  ) : (
    <TimerBeforeStartTraining
      startDate={startDate!}
      onStartTraining={handleStartTraining}
    />
  );
};
