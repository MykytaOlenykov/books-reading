import React, { useMemo } from "react";
import { Sidebar } from "components/Sidebar";
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
