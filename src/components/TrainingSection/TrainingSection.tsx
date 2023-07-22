import React, { useMemo } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Sidebar } from "components/Sidebar";
import { TimeSection } from "components/TimeSection";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import { useBooks, usePlanning, useResizeScreen } from "hooks";
import { bookStatuses } from "constants/";
import { IBook } from "types";
import * as S from "./TrainingSection.styled";

export const TrainingSection: React.FC = () => {
  const { isDesktop } = useResizeScreen();
  const { goingToRead, currentlyReading } = useBooks();
  const { books } = usePlanning();

  const visibledBooks = useMemo<IBook[]>(
    () =>
      [...goingToRead, ...currentlyReading].filter((book) =>
        books.includes(book._id)
      ),
    [goingToRead, currentlyReading, books]
  );

  return (
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
  );
};
